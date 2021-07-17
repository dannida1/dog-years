//my age
let myAge = 40;
//early years
let earlyYears = 2;
earlyYears *= 10.5;

//later years for myAge
let laterYears = myAge - 2;

//number of dog years accounted for by later years
laterYears *= 4;

//get your age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//changes all input to lowercase
let myName = 'dannida'.toLowerCase();

console.log(`my name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years`);