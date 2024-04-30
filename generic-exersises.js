// function outer(){
//     const outerVar = 'Hey I am the outer Var';

//     return function inner(){
//         const innerVar = "hey I am an inner var";
//         console.log(innerVar);
//         console.log(outerVar);
//     }

// }

// const innerFn = outer();
// innerFn();

function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();
    return function(name) {
      return `${myGreet} ${name}`;
    };
}
  
const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));