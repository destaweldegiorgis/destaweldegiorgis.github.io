class CheckingAccount extends Account{
    constructor(number,overDraftLimit){
        super(number);
        this._overDraftLimit = overDraftLimit;// the amount indicates how much a person can teporarily withdraw beyond what they have.
    }
    getOverDraftLimit(){
        return this._overDraftLimit;
    }
    setOverDraftLimit(amount){
        if(amount <= 0)
            throw new RangeError(`Overdraft limit shouldn't be less than zero`);
        this._overDraftLimit = amount;
    }
    withdraw(amount){
        if(amount <= 0)
            throw new RangeError(`Amount should be greater than zero`);
        if(Math.abs(this._balance - amount) > this._overDraftLimit) // if the person tries to withdraw beyond the overdraft limit allowed
            throw new RangeError(`You are not allowed to withdraw beyond the allowed overdraft limit`);
        this._balance -= amount;
    }
    toString(){
        return `Balance of Checking Account ${this._number} after withdrawal is: ${this._balance}`;
    }
    endOfMonth() {
        if(this._balance < 0)
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} limit: ${this._overDraftLimit}`;
        else
            return `Balance of CheckingAccount ${this._number}: balance: ${this._balance} limit: ${this._overDraftLimit}`;
    }
}