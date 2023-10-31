import {makeAutoObservable} from 'mobx'

export default class OrderStore {
    constructor() {
        this._orders = [
            {user: 'Михаил', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '19:00', status: 'не одобрено', telephone: '+375291231212', table_number: 4},
            {user: 'Александр', date_of_creation: '30.10.2023', reservation_date: '31.10.2023', reservation_time: '18:00', status: 'не одобрено', telephone: '+375291231212', table_number: 1}
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