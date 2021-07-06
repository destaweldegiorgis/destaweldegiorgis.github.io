class SavingAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(value){
        if(value <= 0){
            throw new RangeError("Value should be greater than zero");   
        }
        this._interest = value;
    }
    addInterest(){
        let addedValue = this._balance * this._interest / 100;        
        return this._balance += addedValue;
    }
    toString(){        
        return `Balance after interest for Saving Account ${this._number} is: ${this._balance}`;
    }
    endOfMonth() {
        return `Interest added SavingAccount ${this._number}: balance: ${this.addInterest()} interest:${this._interest}`
    }
}//end of class