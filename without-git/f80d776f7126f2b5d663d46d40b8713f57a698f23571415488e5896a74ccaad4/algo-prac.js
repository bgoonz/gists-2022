function main(integer, double, string) {
  console.log(integer + 4);
  console.log((double + 4).toFixed(1));
  console.log("HackerRank " + string);
}

main(20, 40, "here is a string");

function main(number) {
  let nmbOfOnesBefore, nmbOfOnesAfter;
  nmbOfOnesBefore = maxNmbOfConsecutiveChar(number, "1");
  number = number.toString(2);
  nmbOfOnesAfter = maxNmbOfConsecutiveChar(number, "1");
  return nmbOfOnesAfter;
}

const maxNmbOfConsecutiveChar = (string, char) => {
  let maxNmbOfConsecutive = 0;
  let currentNmbOfConsecutive = 0;
  let lastValue = ('' + string).charAt(0);
  ('' + string).split('').map(value => {
    if (lastValue === value)
      (value === char) && currentNmbOfConsecutive++;
    else {
      maxNmbOfConsecutive = currentNmbOfConsecutive > maxNmbOfConsecutive ? currentNmbOfConsecutive : maxNmbOfConsecutive;
      currentNmbOfConsecutive = 0;
    }
  });
  maxNmbOfConsecutive = currentNmbOfConsecutive > maxNmbOfConsecutive ? currentNmbOfConsecutive : maxNmbOfConsecutive;
  return currentNmbOfConsecutive < maxNmbOfConsecutive ? maxNmbOfConsecutive : currentNmbOfConsecutive;
}

console.log(main(65535));

// when input is two dimension array => [[],[]...].
function main(arr) {
  let maxSum = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];

  for (let i = 0; i < arr[0].length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let currentSum = arr[j].slice(i, i + 3).join('+') + "+" + arr[j + 1][i] + "+" + arr[j + 2].slice(i, i + 3).join('+');
      if (eval(currentSum) > maxSum) maxSum = eval(currentSum);
    }
  }
  return maxSum;
}
// let currentSum = arr[j][i] + arr[0][i + 1] + arr[0][i + 2] + arr[1][i + 1] + arr[2][i] + arr[2][i + 1] + arr[2][i + 2];
// if (currentSum > maxSum) maxSum = currentSum;
let input = [
  [1, 1, 1, 1, 1, 1],
  [2, 5, 6, 4, 3, 2],
  [3, 3, 3, 3, 3, 3],
  [1, 1, 1, 1, 1, 1],
  [2, 5, 6, 4, 3, 2],
  [3, 3, 3, 3, 3, 3]
];

console.log(main(input));

// when input is one dimension => ['','']
function main2(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    let row = input[i].split(' ').map(value => +value);
    arr.push(row);
  }
  let maxSum = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];

  for (let i = 0; i < arr[0].length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let currentSum = arr[j].slice(i, i + 3).join('+') + "+" + arr[j + 1][i] + "+" + arr[j + 2].slice(i, i + 3).join('+');
      if (eval(currentSum) > maxSum) maxSum = eval(currentSum);
    }
  }
  return maxSum;
}
let input2 =
  ['1 1 1 1 1 1',
    '2 5 6 4 3 2',
    '3 3 3 3 3 3',
    '1 1 1 1 1 1',
    '2 5 6 4 3 2',
    '3 3 3 3 3 3'
  ];

console.log(main2(input2));

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " + this.lastName + ", " + this.firstName
      + "\nID: " + this.idNumber
    )
  }
}

class Students extends Person {
  /**	
      *   Class Constructor
      *   @param {String} firstName - A string denoting the Person's first name.
      *   @param { number } lastName - A string denoting the Person's last name.
      *   @param id - An integer denoting the Person's ID number.
      *   @param scores - An array of integers denoting the Person's test scores.
      */
  constructor(firstName, lastName, identification, scores) {
    super(firstName, lastName, identification);
    this.scores = scores;
  }
  /**	
    *   Method Name: calculate
    *   @returns A character denoting the grade.
    */
  calculate() {
    let nmbOfDegrees = this.scores.length;
    let sumOfDegrees = 0;
    this.scores.map(value => { sumOfDegrees += value });
    return (sumOfDegrees / nmbOfDegrees);
  }
}

let prsn = new Students('a', 'n', 1, [100, 80]);
console.log(prsn.calculate());


class Book {
  constructor(title, author) {
    if (this.constructor === Book) {
      throw new TypeError('Do not attempt to directly instantiate an abstract class.');
    }
    else {
      this.title = title;
      this.author = author;
    }
  }

  display() {
    console.log('Implement the \'display\' method!')
  }
}

class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }
  display() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}\n`);
  }
}

let book = new MyBook('this is title', 'this is author', 'this is price');
book.display();
function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.insert = (head, data) => {
    if (!head) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          current.next = new Node(data);
          break;
        } else {
          current = current.next;
        }
      }
    }
    return this.head;
  };
  this.display = (head) => {
    var start = head;
    let res = "";
    while (start) {
      res += start.data + " ";
      start = start.next;
    }
    console.log(res);
  };
}

let sol = new Solution();
let head = null;
head = sol.insert(head, 'data1');
head = sol.insert(head, 'data2');
head = sol.insert(head, 'data3');
head = sol.insert(head, 'data4');
console.log(sol.display(head));
// console.log(head);
class Calculator {
  power(n, p) {
    // return n+" "+p;
    if (n < 0 || p < 0) {
      return ("n and p should be non-negative");
    }
    return Math.pow(n, p);
  }
}

function Solution() {
  this.stack = [];
  this.queue = [];

  this.pushCharacter = (char) => { this.stack.push(char) }
  this.popCharacter = () => this.stack.pop();

  this.enqueueCharacter = (char) => { this.pushCharacter(char) }
  this.dequeueCharacter = () => this.stack.shift();
}

let sol = new Solution();

sol.enqueueCharacter('a');
sol.enqueueCharacter('b');
sol.enqueueCharacter('c');
console.log(sol.dequeueCharacter());
console.log(sol.dequeueCharacter());
console.log(sol.dequeueCharacter());

function solve(meal_cost, tip_percent, tax_percent) {
  let tip_cost = meal_cost * tip_percent / 100;
  let tax_cost = meal_cost * tax_percent / 100;
  return Math.round(meal_cost + tip_cost + tax_cost);
}

console.log(solve(12, 20, 8));
function swap(firstPosition, secondPosition, arr) {
  let temp = arr[firstPosition];
  arr[firstPosition] = arr[secondPosition];
  arr[secondPosition] = temp;
}

function bubblySorting(arr) {
  let nmbSwaps = 0;
  for (let i = 0; i < arr.length; i++) {
    let nmbSwapsForRow = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        nmbSwaps++;
        nmbSwapsForRow++;
      }
    }
    if (nmbSwapsForRow === 0) {
      break;
    }
  }
  return [arr, nmbSwaps];
}
let arr = [4, 3, 1, 2];
let [array, numberSwaps] = bubblySorting(arr);
console.log(numberSwaps, array);

let root = {
  data: "A",
  left:
  {
    data: "B",
    left: { data: "D", left: { data: "E" }, right: null },
    right: null
  },
  right:
  {
    data: "C",
    // left: { data: 4, left: null, right: null },
    left: { data: "F", left: { data: "G", left: { data: "H" } }, right: null },
    right: { data: "I", left: null, right: { data: "J" } }
  }
}

const getFirstChild = (node) => node.left ? node.left : node.right;
const hasChild = (node) => (node.right || node.left) ? true : false;

const getHeight = function (root) {
  let height = 0;
  let current = root;
  if (hasChild(current)) {
    // getting left height
    let tempCurrent = { ...current };
    let maxLeftHeight = 0;
    if (tempCurrent.left) {
      maxLeftHeight++;
      tempCurrent = tempCurrent.left;
      maxLeftHeight += getHeight(tempCurrent);
    }
    let maxRightHeight = 0;
    tempCurrent = current;
    // getting right height
    if (tempCurrent.right) {
      maxRightHeight++;
      tempCurrent = tempCurrent.right;
      maxRightHeight += getHeight(tempCurrent);
    }
    // ///////
    if (maxLeftHeight > maxRightHeight) height = maxLeftHeight
    else height = maxRightHeight;
  }
  return height;
};
console.log("Height: ", getHeight(root));
function main(input) {
  let res;
  if (input % 2 === 1) {
    res = "Weird";
  } else if (2 <= input && input <= 5) {
    res = "Not Weird";
  } else if (6 <= input && input <= 20) {
    res = "Weird";
  } else if (input > 20) {
    res = "Not Weird";
  }
  console.log(res);
}

main(1);

function Person(initialAge) {
  let age;
  if (initialAge >= 0) {
    age = initialAge;
  } else {
    console.log('Age is not valid, setting age to 0.');
    age = 0;
  }
  this.amIOld = function () {
    if (age < 13) {
      console.log("You are young.");
    } else if (age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function () {
    age++;
  };
  this.getAge = function () { return age; }
}

let newPerson = new Person(10);
for (let i = 0; i < 3; i++) {
  newPerson.yearPasses();
  console.log(newPerson.getAge());
  (newPerson.amIOld());
}

const main = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

main(5);
function processData() {
  let input = "hacker";
  let evenChars = [];
  let oddChars = [];
  input.split('').map((value, index) => {
    index % 2 === 0
      ? evenChars.push(value)
      : oddChars.push(value);
  })
  return evenChars.join('') + " " + oddChars.join("");
}

console.log(processData());
function main(arr) {
  return arr.reverse().join(" ");
}

console.log(main([1, 4, 3, 2]));
function processData(input) {
  input = input.split('\n');
  let nmb = input.splice(0, 1);
  let data = {};
  // to store data in pairs
  for (let i = 0; i < nmb; i++) {
    let pair = input[i].split(' ');
    data[pair[0]] = pair[1];
  }
  // to console the required data
  for (let i = nmb; i < input.length; i++) {
    data[input[i]] ?
      console.log(`${input[i]}=${data[input[i]]}`) :
      console.log('Not found');
  }
}

let input = "3\n" + "sam 99912222\n" +
  "tom 11122222\n" +
  "harry 12299933\n" +
  "sam\n" +
  "edward\n" +
  "harry";

processData(input);

const factorial = (n) => n ? n * factorial(n - 1) : 1;
console.log(factorial(3));
