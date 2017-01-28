class GuessingGame {
    constructor() {
        this._leftBorder = null;
        this._rightBorder = null;
        this._assumption = null;
    }

    setRange(min, max) {
        this._leftBorder = min;
        this._rightBorder = max;
    }

    guess() {
        return this._assumption = this._leftBorder + Math.round((this._rightBorder - this._leftBorder) / 2);
    }

    lower() {
        this._rightBorder = this._assumption;
    }

    greater() {
        this._leftBorder = this._assumption;
    }
}

module.exports = GuessingGame;
