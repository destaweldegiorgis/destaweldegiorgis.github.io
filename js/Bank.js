class Bank{
    constructor(){
        this._accounts = [];
    }
    
    static nextNumber = 1;

    addAccount(){
        let acc = new Account(Bank.nextNumber);
        acc._balance = 50;
        this._accounts.push(acc);
        Bank.nextNumber += 1;
        return  Bank.nextNumber;
    }
    addSavingAccount(interest){
        let savingAcc = new SavingAccount(Bank.nextNumber,interest);
        savingAcc._balance = 50;
        this._accounts.push(savingAcc);       
        Bank.nextNumber += 1;
        return  Bank.nextNumber;
    }
    addCheckingAccount(overDraft){
        let checkingAcc = new CheckingAccount(Bank.nextNumber, overDraft);
        checkingAcc._balance = 50;
        this._accounts.push(checkingAcc);
        Bank.nextNumber += 1;
        return  Bank.nextNumber;
    }
    closeAccount(accNumber){
        return (this._accounts.filter((e) => e._number !== accNumber)).length;
    }
    accountReport(){
        this._accounts.forEach((account) =>{
            console.log(account.toString());
        });
    }
    endOfMonth() {
        this._accounts.forEach((account) =>{
            console.log(account.endOfMonth());
        }); 
    }
}



