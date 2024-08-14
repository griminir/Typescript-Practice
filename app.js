function helloFunction() {
    var message = 'Hello TypeScript!';
    console.log(message);
}
helloFunction();
function goodbyeFunction(message) {
    console.log("goodbye ".concat(message));
}
goodbyeFunction('TypeScript');
// some useful types
function printTypescriptTypes() {
    var isBoolean = true;
    var decimal = 6;
    var color = 'blue';
    var list = [1, 2, 3];
    var x = ['hello', 10];
    var anything = 4; // the bad one :( probably useful sometimes
    var u = undefined;
    var n = null;
    console.log(isBoolean, decimal, color, list, x, anything, u, n);
}
printTypescriptTypes();
// mvc template
function printH1() {
    var div = document.getElementById('app');
    var html = /*html*/ "<h1>Hello TypeScript!</h1>\n  <p>It's a great day to learn something new.</p>";
    div !== null ? (div.innerHTML = html) : null;
}
printH1();
// use of date
function myBirthday() {
    var birthday = new Date(1994, 10, 2);
    console.log(birthday.getFullYear());
}
myBirthday();
// arrays
function printArray(fruit, fruit2, fruit3) {
    var fruits = [];
    fruits.push(fruit, fruit2, fruit3);
    fruits.push('apple', 'banana', 'orange', 'coconut');
    console.log(fruits);
    var fruitsString = fruits.join(', ');
    console.log(fruitsString);
    var favFruit = fruits[1];
    console.log(fruits.indexOf(favFruit));
    var bestFruits = fruits.filter(function (f) { return !f.startsWith('c'); });
    console.log(bestFruits);
    var firstTwoLetterOfFruits = fruits.map(function (f) { return f.substring(0, 2); });
    console.log(firstTwoLetterOfFruits);
}
printArray('strawberry', 'cherry', 'kiwi');
// conditionals
function yourName(firstName, lastName) {
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    if (firstName === 'viktor' && lastName === 'degray') {
        console.log('Hello creator!');
    }
    else if (firstName === 'viktor' || lastName === 'degray') {
        console.log('Are you my creator?');
    }
    else {
        console.log('Hello Stranger!');
    }
}
yourName('VIKTOR', 'degRAY');
// switch statement break redundent because of return
function weekdaySwitch(dayNumber) {
    switch (dayNumber) {
        case 0: return 'Monday';
        case 1: return 'Tuesday';
        case 2: return 'Wednesday';
        case 3: return 'Thursday';
        case 4: return 'Friday';
        case 5: return 'Saturday';
        case 6: return 'Sunday';
        default: return 'Invalid day number';
    }
}
function whatDayIsIt(dayNumber) {
    console.log("Today is ".concat(weekdaySwitch(dayNumber)));
}
whatDayIsIt(1);
// loops
function humanLoop() {
    var humans = ['Viktor', 'timmy', 'ole', 'storm', 'jacob'];
    for (var i = 0; i < humans.length; i++) {
        console.log(humans[i]);
    }
}
humanLoop();
// function carLoop(): void {
//   let cars: string[] = ['volvo', 'bmw', 'audi', 'mercedes', 'tesla'];
//   for (let car of cars) {
//     console.log(car);
//   }
// }
// carLoop();
function numberLoop() {
    var numbers = [1, 5, 7, 9, 11, 13, 15];
    numbers.forEach(function (num) { return console.log(num); });
}
numberLoop();
function specificType(answer) {
    answer === 'yes' ? console.log('You said yes') : console.log('You said no');
}
specificType('yes');
// const curriedAddThenMultiply = (a: number): CurriedAddThenMultiply => (b: number) => (c: number) => (a + b) * c;
var curriedAddThenMultiply = function (a) {
    return function (b) {
        return function (c) {
            return (a + b) * c;
        };
    };
};
var addTwoAndThreeThenMultiplyFour = curriedAddThenMultiply(2)(3)(4);
console.log(addTwoAndThreeThenMultiplyFour);
