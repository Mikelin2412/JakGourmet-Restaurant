import { $authHost, $host } from "./host";

export const getAllDishes = async (dishTypeId) => {
    const {data} = await $host.get('api/menu/', {params: {dishTypeId}});
    return data;
}

export const getTypes = async () => {
    const {data} = await $host.get('api/type/');
    return data;
}

export const addDish = async (dish) => {
    const {data} = await $authHost.post('api/menu/', dish);
    return data;
}

export const getDish = async () => {
    const {data} = await $host.get('api/menu');
    return data;
}