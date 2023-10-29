import { $authHost, $host } from "./host";
import {jwtDecode} from 'jwt-decode';

export const userRegistration = async (name, email, password) => {
    const {data} = await $host.post('api/user/registration', {name, email, password});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const userLogin = async (name, email, password) => {
    const {data} = await $host.post('api/user/login', {name, email, password});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const userCheck = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    console.log(data.token);
    return jwtDecode(data.token);
}