function helloFunction(): void {
  let message: string = 'Hello TypeScript!';
  console.log(message);
}
helloFunction();

function goodbyeFunction(message: string): void {
  console.log(`goodbye ${message}`);
}
goodbyeFunction('TypeScript');

// some useful types
function printTypescriptTypes(): void {
  let isBoolean: boolean = true;
  let decimal: number = 6;
  let color: string = 'blue';
  let list: number[] = [1, 2, 3];
  let x: [string, number] = ['hello', 10];
  let anything: any = 4; // the bad one :( probably useful sometimes
  let u: undefined = undefined;
  let n: null = null;
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
function myBirthday(): void {
  let birthday: Date = new Date(1994, 10, 2);
  console.log(birthday.getFullYear());
}
myBirthday();

// arrays
function printArray(fruit: string, fruit2: string, fruit3: string): void {
  const fruits: string[] = [];
  fruits.push(fruit, fruit2, fruit3);
  fruits.push('apple', 'banana', 'orange', 'coconut');
  console.log(fruits);

  let fruitsString: string = fruits.join(', ');
  console.log(fruitsString);

  let favFruit: string = fruits[1];
  console.log(fruits.indexOf(favFruit));

  const bestFruits: string[] = fruits.filter((f) => !f.startsWith('c'));
  console.log(bestFruits);

  const firstTwoLetterOfFruits: string[] = fruits.map((f) => f.substring(0, 2));
  console.log(firstTwoLetterOfFruits);
}
printArray('strawberry', 'cherry', 'kiwi');

// conditionals
function yourName(firstName: string, lastName: string): void {
  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();

  if (firstName === 'viktor' && lastName === 'degray') {
    console.log('Hello creator!');
  } else if (firstName === 'viktor' || lastName === 'degray') {
    console.log('Are you my creator?');
  } else {
    console.log('Hello Stranger!');
  }
}
yourName('VIKTOR', 'degRAY');

// switch statement break redundent because of return
function weekdaySwitch(dayNumber: number): string {
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

function whatDayIsIt(dayNumber: number): void {
  console.log(`Today is ${weekdaySwitch(dayNumber)}`);
}
whatDayIsIt(1);

// loops
function humanLoop(): void {
  let humans: string[] = ['Viktor', 'timmy', 'ole', 'storm', 'jacob'];

  for (let i = 0; i < humans.length; i++) {
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

function numberLoop(): void {
  let numbers: number[] = [1, 5, 7, 9, 11, 13, 15];

  numbers.forEach((num) => console.log(num));
}
numberLoop();

function specificType(answer: 'yes' | 'no'): void {
  answer === 'yes' ? console.log('You said yes') : console.log('You said no');
}

specificType('yes');

// funksjonell programmering med TypeScript - currying
type CurriedAddThenMultiply = (b: number) => (c: number) => number;

// const curriedAddThenMultiply = (a: number): CurriedAddThenMultiply => (b: number) => (c: number) => (a + b) * c;

const curriedAddThenMultiply = (a: number): CurriedAddThenMultiply => {
  return (b: number) => {
    return (c: number) => {
      return (a + b) * c;
    };
  };
};
const addTwoAndThreeThenMultiplyFour = curriedAddThenMultiply(2)(3)(4);
const addFiveAndFour = curriedAddThenMultiply(5)(4);
console.log(addFiveAndFour(10));
console.log(addTwoAndThreeThenMultiplyFour);

interface IPersonInfo {
  name: string;
  age: number;
  isAlive: boolean;
}

const viktorRecord = (): IPersonInfo => {
  return {
    name: 'Viktor',
    age: 29,
    isAlive: true,
  };
};

// const viktor: IPersonInfo = {
//   name: "Viktor",
//   age: 29,
//   isAlive: true
// };

type PersonalGrowth = (person: IPersonInfo) => IPersonInfo;
const birthday: PersonalGrowth = (person) => {
  return {
    ...person,
    age: person.age + 1,
  };
};

console.log(birthday(viktorRecord()));
console.log(viktorRecord());

const changeHonorific: PersonalGrowth = (person) => {
  return {
    ...person,
    name: `MR ${person.name}`,
  };
};

// array of functions
const tenYearsOlder: PersonalGrowth[] = Array(10).fill(birthday);
const earningMrTitle: PersonalGrowth[] = [...tenYearsOlder, changeHonorific];

const mrViktor10YearsLater = earningMrTitle.reduce(
  (person, func) => func(person),
  viktorRecord()
);
console.log(mrViktor10YearsLater);

console.log(viktorRecord());

// mvc template functional programming
interface IBoss {
  name: string;
  hp: number;
  damage: number;
  isAlive: boolean;
}

const evilBoss: IBoss = {
  name: 'Evil Boss',
  hp: 100,
  damage: 10,
  isAlive: true,
};

//type guard (mvc template project)
const isPersonInfo = (data: any): data is IPersonInfo => {
  return (data as IPersonInfo).age !== undefined;
};
// check working type guard (mvc template project)
console.log(isPersonInfo(evilBoss));
console.log(isPersonInfo(mrViktor10YearsLater));

//type and function for generating html (mvc template project)
type DataHtmlGenerator = (data: IPersonInfo | IBoss) => string;
const generateHtml: DataHtmlGenerator = (data) => {
  return isPersonInfo(data)
    ? /*html*/ `
    <div>
      <h1>${data.name}</h1>
      <p>${data.age}</p>
      <p>${data.isAlive ? 'Alive' : 'Dead'}</p>
      <button id="swapBossButton">Change data</button>
    </div>
  `
    : /*html*/ `
    <div>
      <h1>${data.name}</h1>
      <p>${data.hp}</p>
      <p>${data.damage}</p>
      <p>${data.isAlive ? 'Alive' : 'Dead'}</p>
      <button id="swapHumanButton">Change data</button>
    </div>
    `;
};

// update view (mvc template project)
const updateView = (element: HTMLElement | null, html: string): void => {
  element !== null ? (element.innerHTML = html) : null;
};

// generating human side of code(mvc template project)
// put into a function to not run it immediately
function runHumanView() {
  const humanInfo = updateView(
    document.getElementById('app'),
    generateHtml(mrViktor10YearsLater)
  );
}

// generating boss side of code(mvc template project)
// put into a function to not run it immediately
function runBossView() {
  const bossInfo = updateView(
    document.getElementById('app'),
    generateHtml(evilBoss)
  );
}

runHumanView();


// Memoization means, storing the results of expensive function calls and returning the cached result when the same inputs occur again.
