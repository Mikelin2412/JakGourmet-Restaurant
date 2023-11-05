import {makeAutoObservable} from 'mobx'
import image from '../assets/images/Capture.png'

export default class DishStore {
    constructor() {
        this._types = [];
        this._dishes = [
            {id: null, name: null, img: null, price: null, description: null, weight: null}
        ];
        this._type = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setDishes(dishes) {
        this._dishes = dishes;
    }
    setSelectedType(type) {
        this._type = type;
    }

    get types() {
        return this._types;
    }
    get dishes() {
        return this._dishes;
    }
    get selectedType() {
        return this._type;
    }
}