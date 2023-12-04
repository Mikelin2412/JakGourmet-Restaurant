import { $authHost } from "./host";

export const addDishToTheBasket = async (userId, dishId, count) => {
    const {data} = await $authHost.post('api/bucket/add', {
        userId,
        dishId,
        count
    });
    return data;
}

export const getAllDishesFromBasket = async (userId) => {
    const {data} = await $authHost.get(`api/bucket/${userId}`);
    return data;
}

export const changeCountOfDishInBasket = async (basketId, dishId, newCount) => {
    const {data} = await $authHost.patch('api/bucket/changeCount', {
        basketId,
        dishId,
        newCount
    });
    return data;
}

export const deleteDefiniteDishFromBasket = async (basketId, dishId) => {
    const {data} = await $authHost.delete('api/bucket/deleteDefinite', {data: {
        basketId,
        dishId   
    }});
    return data;
}

export const deleteAllDishesFromBasket = async (basketId) => {
    const {data} = await $authHost.delete('api/bucket/deleteAll', {data: { basketId }});
    return data;
}