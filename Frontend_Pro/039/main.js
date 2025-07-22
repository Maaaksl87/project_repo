import { capitalize } from "./stringUtils.js"
import { getFirstElement } from "./arrayUtils.js"

const myArray = [1, 2, 3, 4, 5];
console.log(getFirstElement(myArray)); // Outputs: 1, works properly

console.log(capitalize("any string"))