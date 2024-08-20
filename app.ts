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
      <p>Age :${data.age}</p>
      <p>status :${data.isAlive ? 'Alive' : 'Dead'}</p>
      <button id="swapBossButton">Change data</button>
    </div>
  `
    : /*html*/ `
    <div>
      <h1>${data.name}</h1>
      <p>HP :${data.hp}</p>
      <p>str :${data.damage}</p>
      <p>status :${data.isAlive ? 'Alive' : 'Dead'}</p>
      <button id="swapHumanButton">Change data</button>
    </div>
    `;
};

// update view (mvc template project)
type CreateView = (element: HTMLElement | null, html: string) => void;
const updateView: CreateView = (element, html) => {
  element !== null ? (element.innerHTML = html) : null;
};

// generating human side of code(mvc template project)
// added a wait funtion (usikker på hva det heter egentlig)
const runHumanView = (): void =>
  updateView(
    document.getElementById('app'),
    generateHtml(mrViktor10YearsLater)
  );

// generating boss side of code(mvc template project)
// added a wait funtion (usikker på hva det heter egentlig)
const runBossView = (): void =>
  updateView(document.getElementById('app'), generateHtml(evilBoss));

runHumanView();

//event delegation for (mvc template project)
function addGlobalEventListner(
  type: string,
  selector: string,
  func: (event: Event) => void
): void {
  document.addEventListener(type, (event) => {
    const target = event.target as HTMLElement;
    if (target.matches(selector)) {
      func(event);
    }
  });
}

const addButtonOnclick = (): void => {
  addGlobalEventListner('click', '#swapBossButton', runBossView);
  addGlobalEventListner('click', '#swapHumanButton', runHumanView);
};
addButtonOnclick();

// some ways to not provide all params in typescript
const calculateScore = (score: number, peneltyPoints?: number): number => {
  return score - (peneltyPoints || 0);
};

console.log(calculateScore(500));
console.log(calculateScore(500, 400));

const calculateScore2 = (score: number, peneltyPoints: number = 0): number =>
  score - peneltyPoints;

console.log(calculateScore2(500));
console.log(calculateScore2(500, 400));

// how to make a list of params
const addListOfNumbersToATotal = (...numlist: number[]): number => {
  const total = numlist.reduce((sum, current) => sum + current, 0);
  return total;
};
// testing for same outcome
console.log(addListOfNumbersToATotal(1, 2, 3, 4, 5));
console.log(addListOfNumbersToATotal(2, 1, 4, 5, 3));

// typeof typeguard
const processInput = (input: string | number): string | number => {
  return typeof input === 'number' ? input * 2 : input.toUpperCase();
};
console.log(processInput('timmy'));
console.log(processInput(32));

// challange using object.protperty as param
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
}

console.log(processData(10));
console.log(processData('hello'));
console.log(processData('hello', { reverse: true }));

//challenge aliases and interfaces
interface IEmployee {
  id: number;
  name: string;
  department: string;
}
interface IManager {
  id: number;
  name: string;
  employees: IEmployee[];
}
type Staff = IEmployee | IManager;

const alice: IEmployee = { id: 1, name: 'alice', department: 'sales' };
const steve: IEmployee = { id: 1, name: 'steve', department: 'HR' };

const timmy: IManager = { id: 1, name: 'timmy', employees: [alice, steve] };

const printStaffDetails = (staff: Staff): string => {
  if ('employees' in staff) {
    return `${staff.name} is a manager with ${staff.employees.length} employees`;
  } else {
    return `${staff.name} is an employee in the ${staff.department} department`;
  }
};

//checking for expected results
console.log(printStaffDetails(alice));
console.log(printStaffDetails(timmy));

//tuples
const person: [string, number] = ['oliver', 24];
const date: readonly [number, number, number] = [20, 8, 2024];
const susan: [string, number?] = ['susan'];

//Enums
enum ServerResponseStatus {
  Success = 200,
  Error = 'error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

const getServerResponse = (): ServerResponse => {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
};

const response: ServerResponse = getServerResponse();
console.log(response);

// enum/tuple challenge
enum UserRole {
  Admin,
  Manager,
  employee,
}

type User = {
  Id: number,
  name: string,
  role: UserRole,
  Contact: [string, string]
}

function createUser(user: User): User {
  return user;
}

const kimmy = createUser({Id: 32, name: 'kimmy', role: UserRole.Admin, Contact: ['me@gmail.com', '40400404']});

//checking for right values
console.log(kimmy);



// Memoization means, storing the results of expensive function calls and returning the cached result when the same inputs occur again.
