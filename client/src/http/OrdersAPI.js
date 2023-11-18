import { $authHost, $host } from "./host";

export const addOrder = async (userId, dateOfCreation, dateOfReservation, timeOfReservation, status, telephone, numberOfTable) => {
    const {data} = await $authHost.post('api/reservation/add',
        {
            userId,
            dateOfCreation,
            dateOfReservation,
            timeOfReservation,
            status,
            telephone,
            numberOfTable
        });
    return data;
}

export const getAllOrders = async () => {
    const {data} = await $authHost.get('api/reservation/getAll');
    return data;
}