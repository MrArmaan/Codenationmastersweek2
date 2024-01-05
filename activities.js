// --------Tasks Dot Notation----------

// Activity
// const drawTicTacToeBoard = () => {
//     console.log("   |   |   ");
//     console.log("-----------");
//     console.log("   |   |   ");
//     console.log("-----------");
//     console.log("   |   |   ");
//   };
  
//   drawTicTacToeBoard();

//--------- Tasks Variables and Operators-------------

// Activity 1 

// let userName = "Mo";
// let userAge = 32;
// let favoriteColor = "Red";

// console.log(`Hello, my name is ${userName}. I am ${userAge} years old, and my favorite color is ${favoriteColor}.`);

// userName = "Tommy"
// userAge = "3"
// favoriteColor = "Pink"

// console.log(`Hello, my name is ${userName}. I am ${userAge} years old, and my favorite color is ${favoriteColor}.`);

// Activity 2

// let breakfast = "sausage and egg on toast";
// let lunch = "grilled chicken sandwhich";
// let dinner = "steak and chips.";
// console.log (` For breakfast I had ${breakfast}, after that, at lunch I had ${lunch}, and finally for my evening meal I had ${dinner}.`)

// Stretch 

// let breakfast = "sausage and egg on toast";
// let lunch = "grilled chicken sandwhich";
// let dinner = "steak and chips.";
// console.log (` For breakfast I had ${breakfast}, after that, at lunch I had ${lunch}, and finally for my evening meal I had ${dinner}.`)

// breakfast = "ceral";
// lunch = "Soup";
// dinner = "Fish and chips";
// console.log (`Tomorrow for breakfast I will have ${breakfast} and then at lunch I will have ${lunch}, finally for my evening meal I will have ${dinner}.`) 

// Activity 3

// const yourBirthday = new Date('2024-05-20');
// const currentDate = new Date('2024-01-02');
// const timeDifference = yourBirthday - currentDate;
// const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
// console.log(`There are ${daysUntilBirthday} days until your birthday!`)

// Activity 4
// let space1 = "X";
// let space2 = "O";
// let space3 = "X";
// let space4 = "O";
// let space5 = "X";
// let space6 = "O";
// let space7 = "X";
// let space8 = "O";
// let space9 = "X";

// console.log(`
//  ${space1} | ${space2} | ${space3}
// -----------
//  ${space4} | ${space5} | ${space6}
// -----------
//  ${space7} | ${space8} | ${space9}
// `);
  
// --------Tasks If Else-------

// Activity 1

// let age = 17;

// if (age >= 18){ 
//     console.log(" Great what can I get you?");
// } else{
//     console.log ("Too young. Come back when your older!")
// }

// stretch 

// let age = 17;
// let country = "UK";

// if (age >= 18 && country == "Uk"){ 
//     console.log(" Great what can I get you?");
// } else{
//     console.log ("Too young. Come back when your older!")
// } 

// Activity 2

// let topping = "Pepperoni";

// switch (topping){
//     case "Olives":
//     case "Sardines":
//     case "Peppers":
//     case "Sweetcorn":
//     case "Pineapple":
//         console.log (" Are you mental? These do not belong on a pizza!");
//         break;
//     case "Pepperoni":
//         console.log ("This has to be on my pizza!");
//         break;
//     default:
//         console.log ("I don't mind that on my pizza!")
// }

//Activity 3

// let password = "FlubberDubber";

// if (password.length < 8) {
//   console.log("Password is too short. It should be at least 8 characters long.");
// } else {
//   console.log("Password: " + password);
// }

// Stretch 

// let num = 15;

// if (num % 3 === 0 || num % 5 === 0) {
//   console.log(num + " is divisible by 3 or 5.");
// } else {
//   console.log(num + " is not divisible by 3 or 5.");
// }


//Activity 4

// let num = 15; 

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (num % 3 === 0) {
//   console.log("Fizz");
// } else if (num % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log(num);
// }


//Activity 5
// let num = "122221";
// let stringStatus = "is";
// for ( i = 0; i < num.length /2; i++ ) {
//     if (num[i] != num[num.length - 1 - i] ){
//         console.log( " Not a paladrome. ");
//         stringStatus = "not";
//         break;
//     }
// }
//  if ( stringStatus == "is" ){
//     console.log( "It is a palindrome");
//  }
//  else {console.log( "It is not a palindrome");
// }

//Activity 6 

// let time = 8; 
// let placeofwork = "Tescos";
// let townofhome = "Home";

// if (time === 7) {
//   console.log("At 7 AM, I am at " + townofhome);
// } else if (time === 8) {
//   console.log("At 8 AM, I am commuting to " + placeofwork);
// } else if (time === 9) {
//   console.log("At 9 AM, I am in " + placeofwork);
// } else {
//   console.log("At this time, I am somewhere else.");
// }

//Activity 7

// let inputString = "jrfndklhgfndjkjkgperfijfhdksadcvjhbdjobgvfadvfdodngdngnfbnfdbszfvjdfvrjfbraoegbfofbvfdbvlhdfbvadflsvlfhbvhdfbvbfbadsgvfbasjkbvlfjkbvfdbvufbgaojwshi";

// function findLastVowelIndex(str) {
//   const vowels = "aeiouAEIOU";
//   let lastVowelIndex = -1;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       lastVowelIndex = i;
//     }
//   }

//   return lastVowelIndex;
// }

// let lastIndex = findLastVowelIndex(inputString);
// console.log("Index of the last vowel: " + lastIndex);


// Activity 8

// let word = "pokemon"; 

// function isFirstAndLastLetterEqual(str) {
//   str = str.toLowerCase();

//   if (str.length > 0 && str[0] === str[str.length - 1]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let result = isFirstAndLastLetterEqual(word);
// console.log(result);

// Activity 9 

// let num1 = 7;
// let num2 = 7; 

// function processNumbers(num1, num2) {
//   let sum = num1 + num2;

//   if (sum % 2 === 0) {
//     return sum;
//   } else {
//     return num1 * num2;
//   }
// }

// let result = processNumbers(num1, num2);
// console.log(result);

// ----------- Tasks Arrays and Loops --------------- 

// Task 1

// let favoriteSongs = ["Ed Sheeran- Shivers", "Eminem- Venom", "Jason Miraz- I'm Yours"];

// console.log("My favorite songs:");
// favoriteSongs.forEach((song, index) => {
//   console.log(`${index + 1}. ${song}`);
// });

// Stretch 

// let favoriteSongs = ["Ed Sheeran- Shivers", "Eminem- Venom", "Jason Miraz- I'm Yours"];

// favoriteSongs.push("Pokemon- Theme Music", "Elton John- Candle in the wind");

// console.log("Updated list of favorite songs after adding 2 new songs:");
// favoriteSongs.forEach((song, index) => {
//   console.log(`${index + 1}. ${song}`);
// });

// let removedSong = favoriteSongs.pop();
// console.log(`Removed the last song entered: ${removedSong}`);

// console.log("Final list of favorite songs after removing the last one:");
// favoriteSongs.forEach((song, index) => {
//   console.log(`${index + 1}. ${song}`);
// });

// Task 2

//Map()
// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// console.log("Original numbers:", numbers);
// console.log("Doubled numbers:", doubledNumbers);

// Shift()
// let fruits = ["Apple", "Banana", "Orange", "Grapes"];

// let removedFruit = fruits.shift();

// console.log("Original fruits:", fruits);
// console.log("Removed fruit:", removedFruit);

// -------- Loops -------------

// Activity 1

// let films = ["Batman", "Trolls", "Bolt", "Wonka", "Jumanji"];

// films.push("Joker", "Aquaman");

// console.log("List of films:");
// for (let i = 0; i < films.length; i++) {
//   console.log(`${i + 1}. ${films[i]}`);
// }

// Activity 2

// console.log("Random numbers:");

// for (let i = 0; i < 6; i++) {
//   let randomNum = Math.floor(Math.random() * 50) + 1;
//   console.log(randomNum);
// }

// Activity 3

// console.log("Counting from 0 to 9:");
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("Counting from 9 to 0:");
// for (let i = 9; i >= 0; i--) {
//   console.log(i);
// }

// Activity 4 

// let films = ["Bolt", "Finding Nemo", "Ghostbusters", "Batman"];

// if (films[2] === "Ghostbusters") {
//   console.log("Yay! It's Ghostbusters!");
// } else {
//   console.log("Boooo! We want Ghostbusters!");
// }


// Activity 5

// console.log("Checking if each number is divisible by 7:");

// for (let i = 0; i < 6; i++) {
//   let randomNumber = Math.floor(Math.random() * 30) + 1;

//   if (randomNumber % 7 === 0) {
//     console.log(`${randomNumber} is divisible by 7.`);
//   } else {
//     console.log(`${randomNumber} is not divisible by 7.`);
//   }
// }

// ------- Functions -------------

// Activity 1

// function factorial (n) {
//     if ((n===0)|| (n===1)){
//         return 1;
//     } else {
//         return (n * factorial (n-1));}
//     }
// console.log (factorial(33))

// Using arrow function syntax.
// const factorial = (n) => {
//     return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
//   };
  
//   console.log(factorial(33));

// let orderCount = 0;
// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }
// takeOrder("Pineapple")

// updated with 2 parameters and running order Count 

// let orderCount = 0;

// const takeOrder = (topping, crust) => {
//     console.log(`Pizza with ${topping} topping and ${crust} crust`);
//     orderCount++;
//     console.log(`Order count: ${orderCount}`);
// }

// takeOrder("Pineapple", "Thin");

// Activity 3

// let accountBalance = 500; 
// const correctPin = 1234; 

// const cashMachine = (enteredPin, requestedAmount) => {
//   console.log("Welcome to Mo's Money!");

//   if (enteredPin === correctPin) {
//     console.log("PIN is correct. Authenticating...");

//     if (requestedAmount > 0 && requestedAmount <= accountBalance) {
//       console.log(`Authentication successful. Dispensing $${requestedAmount}.`);
//       accountBalance -= requestedAmount;
//       console.log(`Remaining balance: $${accountBalance}`);
//       console.log("Thank you for using Mo's Money!");
//     } else {
//       console.log("Invalid amount or insufficient funds.");
//       console.log("Transaction canceled. Please try again.");
//     }
//   } else {
//     console.log("Incorrect PIN. Access denied.");
//   }
// };

// cashMachine(1234, 200); 

// -------- Activities Objects -----------

// Activity 1
// function sayHi() {
//     return `Hello, my name is ${this.name}`;
//   }
// const person = {
//     name: "Mo",
//     age: "31",
//     hairColor: "Brown",
//     eyeColor: "Blue",
//     favFood: "Pizza",
//     greet: sayHi
// } 
//   console.log(person.greet()); 
  
// Activity 2

// const pet = {
//     name: "WoofWoof",
//     typeOfPet: "Dog",
//     age: "3",
//     color: "Brown with white spots",
//     eating: true,
//     drinking: true,

//     eat(){
//     return `${pet.name} is eating his dog food.` 
// },
//     drink(){ 
//         return `${pet.name} is drinking the water from the water bowl.`
// }
// };
// console.log(pet.eat())
// console.log(pet.drink())


// Activity 3





















