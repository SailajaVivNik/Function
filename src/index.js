import "./styles.css";
document.getElementById("app").innerHTML = `
<h1>Thanks for learning❤️</h1>
<div>
Hi Hi Hi Hi  </div>
`;
// Declare a function named "greet" that takes in a "name" argument

function greet1(name) {
  return `Hello, ${name}.`; // use backtics to inject variables
}
// call the function with a value
//console.log(greet1("Michael"));
greet1 = "sailaja";
//console.log("greet1", greet1);
//uncomment to see the output:
// console.log(greet1("Michael"))

///// 👇🏾The same function, but with an arrow-function 👇🏾/////

// simplified:
const greet2 = name => `Hello, ${name}.`;

//console.log(greet2("Tony"));
//console.log(greet2("Sailaja"));

let check1 = 3;
//console.log("check1", check1);

let add = (num1, num2) => num1 + num2;
//console.log(add(3, 5));

function sailajafunc(name) {
  return `Hello ${name}`; // use backtics to inject variables
}

const sailjaa = name => sailajafunc(name);
console.log(sailjaa("vivek"));
const sailjaa1 = name => sailajafunc(name);
//console.log(sailjaa1("vivek"));

let x = 45;
//console.log("x" ,x);
x = 56;
//console.log("x" ,x);

function variablesum(name) {
  let x = 88;
  //console.log("x-->"+x);
  return `Hello ${name}`; // use backtics to inject variables
}

const michael = {
  name: "sailaja baluvu",
  height: "5.6",
  age: 30,
  name1: {
    first: "Remmy"
  }
};

// const michael1 ={
//   address :"sailaja baluvu",
//   ..michael;
// };

function compare(michael) {
  // console.log(michael.name);
  // console.log(michael.age);
  // console.log(michael.name.first);
  let value1 = michael.height;
  //console.log(value1);
  return `Hello, ${michael}.`; // use backtics to inject variables
}

//let none = compare(michael);

// function checkProperty(michael) {
//   let check;
//   if(michael.name2){
//     check= true;
//     console.log("true");
//   }else{
//   check=false;
//   console.log("false");
//   }

//   return `Hello, ${check}.`; // use backtics to inject variables
// }

function checkPropertyObject(michael) {
  let check;

  return true;
}

let cehckproperoty = checkPropertyObject(michael);
console.log(cehckproperoty);

function readProperty(michael) {
  let txt;
  for (x in michael) {
    txt = michael[x];
    //console.log(txt);
  }

  for (x in michael) {
    JSON.stringify(x);
    // console.log(x);
  }
}

let readProperty1 = readProperty(michael);
//console.log(readProperty1);

//const varval =readProperty=>();

// function checkProperty1(michael) {
//   let check;
//   if(michael.name2==undefined){
//     check= true;
//     console.log("true");
//   }else{
//   check=false;
//   console.log("false");
//   }

//   return `Hello, ${check}.`; // use backtics to inject variables
// }

// let cehckproperoty = checkProperty1(michael);
// console.log(cehckproperoty);

// EXAMPLE:
//// 🤯🤯HOW DID WE GET SO CONSISE?🤯🤯///

/*
1. Create a variable with a name of your function
2. Set the value to an anonymous function declaration
3. Convert the function declaration to an arrow function
4. optional parens around single-arguments
5. Simple returns don't need the "return" keyword or braces
*/

function consoleData() {
  console.log("hi sailaja ");
}

consoleData();

const valInk = () => {
  console.log("hi const");
};

valInk();

const valInk1 = par => {
  console.log("hi Ink1", par);
};

valInk1(1, 2);
var map ={
  name :"saila",
  age :"34"
}

const saila =(map)=>{
    console.log('hi saila nikhil-->' + map.name);
}

saila(map);

const  endpoint =`https://randomuser.me/api?natg=us,dk,fr,gb`;
const fetchUser = () => {
  console.log('hi end point');
  return fetch(endpoint)
    .then(res => res.json())
    .catch(e => console.log("oh dang!"));
};

fetchUser()
  .then(randomUser => {
    console.log(randomUser.results[0].name.first);
    return randomUser;
  })
  .catch(e => console.log("aww shucks"));
