class Account {
          constructor (balance, currency, number) {
                  this.balance = balance;
                  this.currency = currency;
                  this.number = number;
           }
     }

class Person {



     addAccount(account){
                this.accounts.push(account)}

     _calculateBalance() {
                         let total = 0;
                         for (let x of this.accounts) {
                             total+= x.balance;
                         }
                         return "TOTAL " + total;
         }


     sayHello() {
                 return `first Name  ${this.firstName}, last Name ${this.lastName}, Balance ${this._calculateBalance()}`;
     }

    filterPositiveAccounts() {
    return this.accounts.filter(a => a.balance > 0);

    }

    constructor (firstName, lastName, ...accounts) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.accounts = accounts;
            this.sayHello();
    }

    findAccount(accountNumber) {
        return this.accounts.find(account => account.number === accountNumber)
    }

    withdraw(accountNumber, amount) {
        let account = this.findAccount(accountNumber);
        return new Promise((resolve, reject) => {
         if (account != null && account.balance > 0 && amount <= account.balance) {
            setTimeout(() => {
            account.balance = account.balance - amount;
               resolve('Account number ' + account.number + ' New balance ' + account.balance);
            }, 3000)
            } else {
                reject("withdrawal not possible")
            }

          })
         }
    };



let account = new Account(30, 'EUR', 1);
let person = new Person("Ania", "Frania", account);
person.withdraw(1, 5).then((msg) => {
    console.log(msg);
},
(reason) => {
    console.log("Failed, " + reason);
 });