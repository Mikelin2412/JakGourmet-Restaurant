import { makeAutoObservable } from "mobx";

export default class BasketStore {
    constructor() {
        this._basketId = 0;
        this._dishesInBasket = [];
        this._totalPrice = 0;
        makeAutoObservable(this);
    }

    setBasketId(basketId) {
        this._basketId = basketId;
    }

    setDishesInBasket(dishesInBasket) {
        this._dishesInBasket = dishesInBasket;
    }

    setTotalPrice(totalPrice) {
        this._totalPrice = totalPrice;
    }

    get basketId() {
        return this._basketId;
    }

    get dishesInBasket() {
        return this._dishesInBasket;
    }

    get totalPrice() {
        return this._totalPrice;
    }
}