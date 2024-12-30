import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (type, params, language = 'pt-BR') => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, { params: { ...params, language } });
    },
    getTvList: (type, params, language = 'pt-BR') => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, { params: { ...params, language } });
    },
    getVideos: (cate, id, language = 'pt-BR') => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, { params: { language } });
    },
    search: (cate, params, language = 'pt-BR') => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, { params: { ...params, language } });
    },
    detail: (cate, id, params, language = 'pt-BR') => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, { params: { ...params, language } });
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, { params: {} });
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, { params: {} });
    },
}

export default tmdbApi;
