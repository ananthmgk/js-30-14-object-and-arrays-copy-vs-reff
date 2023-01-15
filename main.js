let age = 100;
let age2 = age;
// console.log(age, age2); // 100 100

age2 = 200;
// console.log(age, age2); // 100 200

let name = 'ananth';
let name2 = name;
// console.log(name, name2); // ananth ananth

name2 = 'usha';
// console.log(name, name2); // ananth usha

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// let players1 = players;
// players1[2] = 'ananth';
// console.log(players, players1);
// [ 'Wes', 'Sarah', 'ananth', 'Poppy' ]
// [ 'Wes', 'Sarah', 'ananth', 'Poppy' ]
// so we have to take a copy of that array.

let playersCopy1 = players.slice(0);
playersCopy1[2] = 'ananth';
// console.log(players, playersCopy1);
// [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
// [ 'Wes', 'Sarah', 'ananth', 'Poppy' ]

let playersCopy2 = [].concat(players);
playersCopy2[2] = 'ananth';
// console.log(players, playersCopy2);
// [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
// [ 'Wes', 'Sarah', 'ananth', 'Poppy' ]

let playersCopy3 = [...players];
playersCopy3[2] = 'ananth';
// console.log(players, playersCopy3);
// [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
// [ 'Wes', 'Sarah', 'ananth', 'Poppy' ]

let playersCopy4 = Array.from(players);
playersCopy4[2] = 'ananth';
// console.log(players, playersCopy4);
// [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
// [ 'Wes', 'Sarah', 'ananth', 'Poppy' ]

// now when we update it, the original one isn't changed

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// const captain = person;
// person.number = 90;
// console.log(person, captain);
// { name: 'Wes Bos', age: 80, number: 90 }
// { name: 'Wes Bos', age: 80, number: 90 }
// so we have to take a copy of that object.

const personCopy1 = Object.assign({}, person, { number: 90, badge: 1 });
// console.log(person, personCopy1);
// { name: 'Wes Bos', age: 80 }
// { name: 'Wes Bos', age: 80, number: 90, badge: 1 }

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};
const personCopy2 = Object.assign({}, wes);
personCopy2.social.number = 90;
// console.log(wes, personCopy2);
// {
//   name: 'Wes',
//   age: 100,
//   social: { twitter: '@wesbos', facebook: 'wesbos.developer', number: 90 }
// }
// {
//   name: 'Wes',
//   age: 100,
//   social: { twitter: '@wesbos', facebook: 'wesbos.developer', number: 90 }
// }

// Things to note - this is only 1 level deep - both for Arrays and Objects. we have a cloneDeep method,
// but you should think twice before using it.

const dev2 = JSON.parse(JSON.stringify(wes));
// here in this method we can get the correct answer, because when we put an object into
// the .stringify function, it will convert the object into a string. and the parse function
// will convert the string into an object.
