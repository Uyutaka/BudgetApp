/// object destructuring

// const person = {
//     name: 'Andrew',
//     age: 4,
//     location:{
//         city: "boulder",
//         temp: 20
//     }
// };
//
// const {name: firstName = 'Anonymous', age} = person
// console.log(`${firstName} is ${age}`);
// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`${city} in ${temperature}`);
// }
//
//
// const book ={
//     title: 'Ego is the Enemy',
//     author: "R.H",
//     publisher:{
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = "self-publish"} = book.publisher;
// console.log(publisherName);

////////////////////////
/// array destructuring
////////////////////////
const address = ['12999 S Street', 'Boulder', 'Colorado', '80302'];
const [, , yourState] = address;
console.log(`In ${yourState}`)

const item = ['Coffee', '2.00', '2.50', '2.75'];
const [itemName, , medium] = item;
console.log(`${itemName} costs ${medium}`);