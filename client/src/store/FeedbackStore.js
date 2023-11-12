import { makeAutoObservable } from "mobx";

export default class FeedbackStore {
    constructor() {
        this._users = [];
        this._feedbacks = [];
        makeAutoObservable(this);
    }

    setUsersOfFeedbacks(users) {
        this._users = users;
    }

    setFeedbacks(feedbacks) {
        this._feedbacks = feedbacks;
    }

    get usersOfFeedbacks() {
        return this._users;
    }

    get allFeedbacks() {
        return this._feedbacks;
    }
}