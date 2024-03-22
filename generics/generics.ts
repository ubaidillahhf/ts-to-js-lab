function getFirstElementOne(arr: string[]) {}

function getFirstElementTwo<T>(arr: T[]): T {
  return arr[0];
}

// we have 2 arrays with different type
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "orange"];

// print, look we can reuse the functions!!
console.log(
  "Array contains number => ",
  getFirstElementTwo<number>(numberArray)
);
console.log(
  "Array contains string => ",
  getFirstElementTwo<string>(stringArray)
);
