var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// function printH1(): void {
//   let div: HTMLElement | null = document.getElementById('app');
//   let html: string = /*html*/ `<h1>Hello TypeScript!</h1>
//   <p>It's a great day to learn something new.</p>`;
//   div !== null ? (div.innerHTML = html) : null;
// }
// printH1();
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
        case 0:
            return 'Monday';
        case 1:
            return 'Tuesday';
        case 2:
            return 'Wednesday';
        case 3:
            return 'Thursday';
        case 4:
            return 'Friday';
        case 5:
            return 'Saturday';
        case 6:
            return 'Sunday';
        default:
            return 'Invalid day number';
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
var addFiveAndFour = curriedAddThenMultiply(5)(4);
console.log(addFiveAndFour(10));
console.log(addTwoAndThreeThenMultiplyFour);
var viktorRecord = function () {
    return {
        name: 'Viktor',
        age: 29,
        isAlive: true,
    };
};
var birthday = function (person) {
    return __assign(__assign({}, person), { age: person.age + 1 });
};
console.log(birthday(viktorRecord()));
console.log(viktorRecord());
var changeHonorific = function (person) {
    return __assign(__assign({}, person), { name: "MR ".concat(person.name) });
};
// array of functions
var tenYearsOlder = Array(10).fill(birthday);
var earningMrTitle = __spreadArray(__spreadArray([], tenYearsOlder, true), [changeHonorific], false);
var mrViktor10YearsLater = earningMrTitle.reduce(function (person, func) { return func(person); }, viktorRecord());
console.log(mrViktor10YearsLater);
console.log(viktorRecord());
var evilBoss = {
    name: 'Evil Boss',
    hp: 100,
    damage: 10,
    isAlive: true,
};
//type guard (mvc template project)
var isPersonInfo = function (data) {
    return data.age !== undefined;
};
// check working type guard (mvc template project)
console.log(isPersonInfo(evilBoss));
console.log(isPersonInfo(mrViktor10YearsLater));
var generateHtml = function (data) {
    return isPersonInfo(data)
        ? /*html*/ "\n    <div>\n      <h1>".concat(data.name, "</h1>\n      <p>").concat(data.age, "</p>\n      <p>").concat(data.isAlive ? 'Alive' : 'Dead', "</p>\n      <button id=\"swapBossButton\">Change data</button>\n    </div>\n  ")
        : /*html*/ "\n    <div>\n      <h1>".concat(data.name, "</h1>\n      <p>").concat(data.hp, "</p>\n      <p>").concat(data.damage, "</p>\n      <p>").concat(data.isAlive ? 'Alive' : 'Dead', "</p>\n      <button id=\"swapHumanButton\">Change data</button>\n    </div>\n    ");
};
// update view (mvc template project)
var updateView = function (element, html) {
    element !== null ? (element.innerHTML = html) : null;
};
// generating human side of code(mvc template project)
// put into a function to not run it immediately
function runHumanView() {
    var humanInfo = updateView(document.getElementById('app'), generateHtml(mrViktor10YearsLater));
}
// generating boss side of code(mvc template project)
// put into a function to not run it immediately
function runBossView() {
    var bossInfo = updateView(document.getElementById('app'), generateHtml(evilBoss));
}
runHumanView();
// some ways to not provide all params in typescript
var calculateScore = function (score, peneltyPoints) {
    return score - (peneltyPoints || 0);
};
console.log(calculateScore(500));
console.log(calculateScore(500, 400));
var calculateScore2 = function (score, peneltyPoints) {
    if (peneltyPoints === void 0) { peneltyPoints = 0; }
    return score - peneltyPoints;
};
console.log(calculateScore2(500));
console.log(calculateScore2(500, 400));
// how to make a list of params
var addListOfNumbersToATotal = function () {
    var numlist = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numlist[_i] = arguments[_i];
    }
    var total = numlist.reduce(function (sum, current) { return sum + current; }, 0);
    return total;
};
// testing for same outcome
console.log(addListOfNumbersToATotal(1, 2, 3, 4, 5));
console.log(addListOfNumbersToATotal(2, 1, 4, 5, 3));
// typeof typeguard
var processInput = function (input) {
    return typeof input === "number" ? (input * 2) : input.toUpperCase();
};
console.log(processInput('timmy'));
console.log(processInput(32));
// Memoization means, storing the results of expensive function calls and returning the cached result when the same inputs occur again.
