import { $authHost, $host } from "./host";

export const addFeedback = async (id, feedback) => {
    const {data} = await $authHost.post('api/feedbacks/', {id, feedback});
    return data;
}

export const getAllFeedbacks = async () => {
    const {data} = await $host.get('api/feedbacks/');
    return data;
}