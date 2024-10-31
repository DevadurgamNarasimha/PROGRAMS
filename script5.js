//1. customSplice
function customSplice(array, start, deleteCount, ...itemsToAdd) {
    const removedItems = array.slice(start, start + deleteCount);
    const newArray = [
        ...array.slice(0, start),
        ...itemsToAdd,
        ...array.slice(start + deleteCount)
    ];
    return { newArray, removedItems };
}
const toys = ['car', 'doll', 'ball'];
const result = customSplice(toys, 1, 1, 'teddy bear');
console.log(result.newArray);
console.log(result.removedItems); 
//...........................................................................................


//2. customSlice
function customSlice(array, start, end) {
    return array.slice(start, end);
}
const cakePieces = ['chocolate', 'vanilla', 'strawberry', 'red velvet'];
console.log(customSlice(cakePieces, 1, 3));
//...........................................................................................


//3. customIncludes
function customIncludes(array, element) {
    return array.some(item => item === element);
}
const ingredients = ['flour', 'sugar', 'eggs'];
console.log(customIncludes(ingredients, 'sugar'));
console.log(customIncludes(ingredients, 'milk')); 
//.............................................................................................


//4. customPush
function customPush(array, ...items) {
    items.forEach(item => array[array.length] = item);
    return array.length;
}
const toysBox = ['car', 'doll'];
customPush(toysBox, 'teddy bear', 'action figure');
console.log(toysBox);
//............................................................................................


//5. customPop
function customPop(array) {
    if (array.length === 0) return undefined;
    const poppedItem = array[array.length - 1];
    array.length = array.length - 1; 
    return poppedItem;
}
const cookies = ['chocolate chip', 'oatmeal', 'sugar'];
const lastCookie = customPop(cookies);
console.log(lastCookie); 
console.log(cookies); 
//................................................................................................


//6. customToLowerCase
function customToLowerCase(str) {
    return str.split('').map(char => char.toLowerCase()).join('');
}
console.log(customToLowerCase('HELLO WORLD'));
//..................................................................................................


//7. customToUpperCase
function customToUpperCase(str) {
    return str.split('').map(char => char.toUpperCase()).join('');
}
console.log(customToUpperCase('hello world'));