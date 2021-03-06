﻿import observable = require("data/observable");

export class ViewModel extends observable.Observable {
    constructor() {
        super();
    }

    private _translateX = 0;;
    get translateX(): number {
        return this._translateX;
    }
    set translateX(value: number) {
        this._translateX = value;
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "translateX", value: value });
    }

    private _translateY = 0;
    get translateY(): number {
        return this._translateY;
    }
    set translateY(value: number) {
        this._translateY = value;
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "translateY", value: value });
    }

    private _scaleX = 1;
    get scaleX(): number {
        return this._scaleX;
    }
    set scaleX(value: number) {
        this._scaleX = value;
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "scaleX", value: value });
    }

    private _scaleY = 1;
    get scaleY(): number {
        return this._scaleY;
    }
    set scaleY(value: number) {
        this._scaleY = value;
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "scaleY", value: value });
    }

    private _rotate = 0;
    get rotate(): number {
        return this._rotate;
    }
    set rotate(value: number) {
        this._rotate = value;
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "rotate", value: value });
    }
}