
window.load = display;

function display() {
let person = new Person('Bania', 'Srania', new Account(40, "EUR", 1), new Account(40, "EUR", 2));
document.getElementByClassName("card-title")[0].innerHTML = "First name: " + person.firstName + " and last name: " person.lastName;
display();

}