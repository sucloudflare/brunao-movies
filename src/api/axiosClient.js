import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

// Criação de uma instância do Axios com configurações globais
const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,  // URL base da API
    headers: {
        'Content-Type': 'application/json',  // Cabeçalho padrão para requisições JSON
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})  // Serialização de parâmetros
});

// Interceptor de requisição (antes de enviar a requisição)
axiosClient.interceptors.request.use(
    async (config) => {
        // Aqui você pode modificar a configuração antes da requisição ser enviada
        // Por exemplo, adicionar tokens de autenticação
        const token = localStorage.getItem('token'); // Supondo que o token esteja no localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;  // Adicionando o token no cabeçalho
        }
        return config;
    },
    (error) => {
        // Tratamento de erro em requisição
        return Promise.reject(error);  // Rejeitar a promessa caso haja erro
    }
);

// Interceptor de resposta (depois de receber a resposta da API)
axiosClient.interceptors.response.use(
    (response) => {
        // Aqui podemos tratar as respostas antes de retorná-las
        if (response && response.data) {
            return response.data;  // Retorna apenas o corpo da resposta
        }
        return response;  // Retorna a resposta completa caso não tenha corpo
    },
    (error) => {
        // Tratamento de erro na resposta
        if (error.response) {
            // O servidor respondeu com um status que não é 2xx
            console.error('Error response:', error.response);
            return Promise.reject(error.response);  // Rejeita com a resposta de erro
        } else if (error.request) {
            // A requisição foi feita, mas não houve resposta
            console.error('Error request:', error.request);
            return Promise.reject(error.request);  // Rejeita com a requisição
        } else {
            // Erro ao configurar a requisição
            console.error('Error message:', error.message);
            return Promise.reject(error.message);  // Rejeita com a mensagem de erro
        }
    }
);

export default axiosClient;
