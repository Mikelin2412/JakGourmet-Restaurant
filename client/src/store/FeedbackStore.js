import { makeAutoObservable } from "mobx";

export default class FeedbackStore {
    constructor() {
        this._feedbacks = [];
        makeAutoObservable(this);
    }

    setFeedbacks(feedbacks) {
        this._feedbacks = feedbacks;
    }
    
    get allFeedbacks() {
        return this._feedbacks;
    }
}