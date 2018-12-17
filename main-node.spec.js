const chai = require('chai');
const expect = chai.expect;
const Person = require('../main.js').Person;
const Account = require('../main.js').Account;

describe('Person class tests', () => {

    let person;

    beforeEach() => {
        person = new Person("name", "last", [new Account(12, "pln")])

        });

        it("Should create person correctly", () => {

        let result = person.sayHello();
        expect(result).to.not.be.undefined;

        });
    });