import {makeAutoObservable} from 'mobx'
import image from '../assets/images/Capture.png'

export default class DishStore {
    constructor() {
        this._types = [
            {id: 1, type_name: 'Закуски'},
            {id: 2, type_name: 'Салаты'},
            {id: 3, type_name: 'Супы'},
            {id: 4, type_name: 'Горячие блюда'},
            {id: 5, type_name: 'Гарниры'},
            {id: 6, type_name: 'Десерты'}
        ];
        this._dishes = [
            {id: 1, name: 'Селедка под шубой', img: image, price: 30, description: 'бла бла бла', weight: 150},
            {id: 2, name: 'Рис', img: image, price: 25, description: 'ням ням', weight: 200}
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setDishes(dishes) {
        this._dishes = dishes;
    }

    get types() {
        return this._types;
    }
    get dishes() {
        return this._dishes;
    }
}