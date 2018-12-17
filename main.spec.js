describe("Test for main.js", () => {

    let person;
    const firstName = "Anja";

    beforeEach(() => {
        person = new Person(firstName, 'Srania', new Account(40, "EUR", 1))
    });

    it("Defined person", () => {
     expect(person).toBeDefined();
   });

    it("Add account", () =>{

       person.addAccount(new Account(20, "EUR", 3));
       let result = person.accounts.length;
       expect(result).toEqual(2)
           });

    it("Say Hello", () =>{
        let result = person.sayHello();
        expect(result)
        expect(result).toContain(firstName);
    });

    it("Withdrawal", (done) => {
    let promise = person.withdraw(1, 5);

    promise.then(() => {
    expect(person.accounts[0].balance).toBeDefined();
    done();
    });
  })
});