class ATM {
  #balance;
  #transactions;
  #dailyLimit;
  #dailyWithdrawn;

  constructor() {
    this.#balance = 7000;
    this.#transactions = [];
    this.#dailyLimit = 10000;
    this.#dailyWithdrawn = 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid amount. Please enter a valid amount.");
      return;
    }
    this.#balance += amount;
    this.#addTransaction(`Deposited: ${amount} Rs.`);
    console.log(`Transaction successful. New balance: ${this.#balance} Rs.`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Invalid amount. Please enter a valid amount.");
      return;
    }
    if (amount > this.#balance) {
      console.log("Insufficient balance. Transaction failed.");
      return;
    }
    if (amount + this.#dailyWithdrawn > this.#dailyLimit) {
      console.log("Daily withdrawal limit exceeded. Transaction failed.");
      return;
    }
    this.#balance -= amount;
    this.#dailyWithdrawn += amount;

    this.#addTransaction(`Withdrawn: ${amount} Rs.`);
    console.log(`Transaction successful. New balance: ${this.#balance} Rs.`);
  }

  balanceInquiry() {
    console.log(`Current balance: ${this.#balance} Rs.`);
  }

  miniStatement() {
    this.#transactions.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }

  #addTransaction(transaction) {
    if (this.#transactions.length === 5) {
      this.#transactions.shift();
    }
    this.#transactions.push(transaction);
  }
}

const atm = new ATM();

atm.deposit(2000); // Sample Input 1
atm.withdraw(1000); // Sample Input 2
atm.balanceInquiry();
atm.miniStatement();
