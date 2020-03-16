import axios from "axios";
import { AsyncStorage } from 'react-native';
const instacne = axios.create({
    baseURL: 'http://b3d91af6.ngrok.io'
});
instacne.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    })

export default instacne;