// api/OlhoVivoAPI.js
import axios from 'axios';
import { API_KEY } from '../config';

const API_BASE_URL = 'https://aiko-olhovivo-proxy.aikodigital.io/';

const olhoVivoApi = axios.create({
    baseURL: API_BASE_URL,
});

export const authenticate = async () => {
    try {
        const response = await olhoVivoApi.post('login/Autenticar', { token: API_KEY });
        if (response.data) {
            olhoVivoApi.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
        }
        return response.data;
    } catch (error) {
        console.error('Erro na autenticação:', error);
        return false;
    }
};