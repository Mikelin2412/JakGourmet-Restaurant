import {makeAutoObservable} from 'mobx'

export default class OrderStore {
    constructor() {
        this._orders = [
            {id: 1, user: 'Михаил', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '19:00', status: 'не одобрено', telephone: '+375291231212', table_number: 4},
            {id: 2, user: 'Александр', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '18:00', status: 'не одобрено', telephone: '+375291231212', table_number: 1},
            {id: 3, user: 'Михаил', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '19:00', status: 'не одобрено', telephone: '+375291231212', table_number: 4},
            {id: 4, user: 'Александр', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '18:00', status: 'не одобрено', telephone: '+375291231212', table_number: 1},
            {id: 5, user: 'Михаил', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '19:00', status: 'не одобрено', telephone: '+375291231212', table_number: 4},
            {id: 6, user: 'Александр', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '18:00', status: 'не одобрено', telephone: '+375291231212', table_number: 1},
            {id: 7, user: 'Михаил', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '19:00', status: 'не одобрено', telephone: '+375291231212', table_number: 4},
            {id: 8, user: 'Александр', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '18:00', status: 'не одобрено', telephone: '+375291231212', table_number: 1},
            {id: 9, user: 'Михаил', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '19:00', status: 'не одобрено', telephone: '+375291231212', table_number: 4},
            {id: 10, user: 'Александр', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '18:00', status: 'не одобрено', telephone: '+375291231212', table_number: 1},
            {id: 11, user: 'Михаил', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '19:00', status: 'не одобрено', telephone: '+375291231212', table_number: 4},
            {id: 12, user: 'Александр', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '18:00', status: 'не одобрено', telephone: '+375291231212', table_number: 1}
        ]
        makeAutoObservable(this);
    }

    setOrders(orders) {
        this._orders = orders;
    }

    get orders() {
        return this._orders;
    }
}