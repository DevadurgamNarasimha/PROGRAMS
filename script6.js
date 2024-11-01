// Prompt 1: Mapping Array Elements
function doubleNumbers(input){
    const numbers=input.split(' ').map(Number);
    return numbers.map(num=>num*2);
}
const Input="1 2 3 4";
const results=doubleNumbers(Input);
console.log(results);
//.................................................................................


// Prompt 2: Filtering Data
function filterEvenNumbers(input){
    const numbers=input.split(',').map(Number);
    return numbers.filter(num=>num%2===0);
}
const userInput = "1,2,3,4,5";
const input = filterEvenNumbers(userInput);
console.log(input);
//............................................................................................


// Prompt 3: Reducing Arrays
function sumNumbers(input){
    const numbers=input.split(';').map(num=>parseFloat(num.trim()));
    const validNumbers=numbers.filter(num=>!isNaN(num));
    const sum= numbers.reduce((acc, num)=>acc+num,0);
    return sum;
}
const inputs="5;10;15";
const result=sumNumbers(inputs);
console.log(result)