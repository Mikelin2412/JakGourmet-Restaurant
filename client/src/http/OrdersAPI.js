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

export const getDefiniteReservations = async (id) => {
    const {data} = await $authHost.get('api/reservation/getDefinite', {params: {id}});
    return data;
}

export const updateReservation = async (id, status) => {
    const {data} = await $authHost.patch(`api/reservation/update/${id}`, 
    {
        status,
    });
    return data;
}