import axios from 'axios';

const $host = axios.create({
    baseURL: 'http://localhost:5050/',
});

const $authHost = axios.create({
    baseURL: 'http://localhost:5050/',
});

const authInterceptor = config => {
    console.log('TOKEN: ' + localStorage.getItem('token'));
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost,
}