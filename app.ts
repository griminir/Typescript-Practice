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
function printH1(): void {
  let div: HTMLElement | null = document.getElementById('app');
  let html: string = /*html*/ `<h1>Hello TypeScript!</h1>
  <p>It's a great day to learn something new.</p>`;
  div !== null ? (div.innerHTML = html) : null;
}
printH1();

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
  } else if (firstName === 'viktor'|| lastName === 'degray') {
    console.log('Are you my creator?');
  } else {
    console.log('Hello Stranger!');
  }
}
yourName('VIKTOR', 'degRAY');

// switch statement break redundent because of return
function weekdaySwitch(dayNumber: number): string {
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

function whatDayIsIt(dayNumber: number): void {
  console.log(`Today is ${weekdaySwitch(dayNumber)}`);
}
whatDayIsIt(1);