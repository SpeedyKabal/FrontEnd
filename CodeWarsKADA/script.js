// Convert String to Camel Case
// Challenge Name : Convert string to camel case 
function toCamelCase(str){
  let arr = str.split("");
  console.log(arr);
  for(let i=0; i<arr.length;i++){
    if(arr[i] == "-" || arr[i] == "_"){
        arr[i+1] = arr[i+1].toUpperCase();
        arr.splice(i,1);
    }
  }
  return(arr.join(""));
}

// Spin The Words that has more than 5 Characters
// Challenge Name : Stop gninnipS My sdroW! 
function spinWords(string){
  //TODO Have fun :)
    let arr = string.split(" ");
    for(let i=0; i<arr.length; i++){
        if(arr[i].length >= 5){
            let reverseword = arr[i].split("").reverse().join("");
            arr[i] = reverseword;
        }
    }

    return arr.join(" ");
}

// Replace Numbers With Alphabet Position 
// Challenge Name : Replace With Alphabet Position
function alphabetPosition(text) {
  const numbers = [];
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        // lowercase letters
        numbers.push(charCode - 96);
      } else if (charCode >= 65 && charCode <= 90) {
        // uppercase letters
        numbers.push(charCode - 64);
      }
    }
    return numbers.join(" ");
}

// Detect if The Word is Isogram or not
// Isogram word : a word that has no repeating letters
// Challenge Name : Isograms
function isIsogram(str){
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++){
      for(let j = i + 1 ; j < str.length; j++){
          if(str[i] === str[j]) return false;
      }
  }
  return true;
}

// Filter an array and remove all the Words 
// That Above 4 Charcters 
// Challenge Name : Friend or Foe?
function friend(friends){
  return friends.filter(function(element){
    return element.length == 4;
  })
}

// Moving The Zero's to The End of an Array
// Challenge Name : Moving Zeros To The End
function moveZeros(arr) {
  let counter =0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
      counter++;
    }
  }
  arr = arr.filter(ele=>ele!==0);
  for(let i=0;i<counter;i++){
      arr.push(0);
  }
  return arr;
}

// Convert a String of numbers into Readable Phone Number
// Challenge Name : Create Phone Number
function createPhoneNumber(numbers){
  let phone ="(";
  for(let i=0;i<3;i++){
    phone+=numbers[i];
  }
  phone+=") ";
  for(let i=3;i<6;i++){
    phone+=numbers[i];
  }
  phone+="-";
  for(let i=6;i<10;i++){
    phone+=numbers[i];
  }
  return phone;
}

//This Function return a list of items without 
//any elements with the same value next to each other
// Challenge Name : Unique In Order
var uniqueInOrder=function(iterable){
  let result = [];
  for(let i=0; i<iterable.length;i++){
    if(iterable[i] != iterable[i+1]) result.push(iterable[i]);
  }
  return result;
}

// This function take a recipe and available ingredients 
// and return the number of recipes that can maded by available
// ingredients
// Challenge Name : Pete, the baker
function cakes(recipe, available) {
  //make a variable to store all possible number of cakes by ingerediants
  let numbercakes = [];
  
  //
  for (const key in recipe) {
      if (recipe.hasOwnProperty(key) && !available.hasOwnProperty(key)) {
        return 0;
      }
      for (const cle in available){
          if(key == cle){
              numbercakes.push(Math.floor(available[cle]/recipe[key]));
          }
      }  
  }
  let minnum = numbercakes[0];

  for(let i=0; i<numbercakes.length;i++){
      if(minnum > numbercakes[i]){
          minnum = numbercakes[i];
      }
  }
  return minnum;
}

// This Function take a number as argument
// and return True if the Number is Prime
// Challenge Name : Is a number prime?
function isPrime(num) {
  //TODO  Best way is to loop all over the numbers
  //But since that aren't allowed u have to divide num
  if (num < 2) return false;
  let sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}