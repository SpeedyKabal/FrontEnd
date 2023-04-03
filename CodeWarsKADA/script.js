/*
let cake = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
let numbercakes = [];

for (let key in cake) {
    if (cake.hasOwnProperty(key) && !available.hasOwnProperty(key)) {
      console.log(`Property '${key}' exists in object1 but not in object2`);
    }
}

for (const key in cake) {
    if (cake.hasOwnProperty(key) && !available.hasOwnProperty(key)) {
        //return 0;
    }
    for (const cle in available){
        if(key == cle){
            numbercakes.push(Math.floor(available[cle]/cake[key]));
        }
    }  
}

console.log(numbercakes);

let minnum = numbercakes[0];

for(let i=0; i<numbercakes.length;i++){
    if(minnum > numbercakes[i]){
        minnum = numbercakes[i];
    }
}
console.log(minnum);
*/
function isPrime(num) {
    //TODO
    let numberOfDivisors = 0;
    if(num <= 1) return false;
    for(let i=1; i<=num; i++){
      if(num%i == 0){
        numberOfDivisors++;
        console.log(numberOfDivisors, i);
      }
    }
    if(numberOfDivisors<=2){
      return true;
    }else{
      return false;
    }
}

console.log(isPrime(73));