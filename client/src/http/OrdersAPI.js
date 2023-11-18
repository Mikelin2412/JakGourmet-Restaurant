import { $authHost, $host } from "./host";

export const addOrder = async (id, feedback) => {
    const {data} = await $authHost.post('api/reservation/add', {id, feedback});
    return data;
}

export const getAllOrders = async () => {
    const {data} = await $authHost.get('api/reservation/getAll');
    return data;
}