class BankAccount {
    constructor(name, balance) {
        this.accountHolder = name;
        this.balance = balance;
        this.bankName = "sbi";
    }
    getBalance() {
        return this.balance;
    }
}
const acc = new BankAccount("Manas", 5000);
console.log(acc.accountHolder);
export {};
// console.log(acc.balance)//Error private
