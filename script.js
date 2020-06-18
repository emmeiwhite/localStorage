/** --- Store data in localStorage --- */
localStorage.setItem("name", 'emmei');
localStorage.setItem("age", "28");

/** --- Getting data from localStorage --- */
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

/** --- Updating data in the localStorage --- */
localStorage.setItem("name", 'roufi');
localStorage.setItem("age", "30");
console.log(name, age);


/** --- removeItem() and clear() to remove the data from the localStorage database --- */

localStorage.removeItem("name");
let name2 = localStorage.getItem("name");
console.log(name2);

localStorage.clear(); // deletes everything from the localStorage database 
console.log(localStorage.getItem("age"));