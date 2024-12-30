const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e1c911141368cd5f942bd20fe25cc2c6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;