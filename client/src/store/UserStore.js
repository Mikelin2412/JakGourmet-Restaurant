import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = true;
        this._role = 'USER';
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(isAuth) {
        this._isAuth = isAuth;
    }
    setRole(role) {
        this._role = role;
    }
    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }
    get role() {
        return this._role;
    }
    get user() {
        return this._user;
    }
}