class BankAccount {
  public accountHolder: string;
  private balance: number;
  protected bankName: string;

  constructor(name: string, balance: number) {
    this.accountHolder = name;
    this.balance = balance;
    this.bankName = "sbi";}
  public getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount("Manas", 5000);

console.log(acc.accountHolder); 
// console.log(acc.balance)//Error private