import { $authHost, $host } from "./host";

export const getAllDishes = async () => {
    const {data} = await $host.get('api/menu/');
    return data;
}

export const getTypes = async () => {
    const {data} = await $host.get('api/type/');
    return data;
}

export const addDish = async (name, description, price, weight, dishTypeId) => {
    const {data} = await $authHost.post('api/menu/', {name, description, price, weight, dishTypeId});
    return data;
}

export const getDish = async () => {
    const {data} = await $host.get('api/menu');
    return data;
}