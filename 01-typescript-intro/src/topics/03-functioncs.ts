function addNumbers(a: number, b: number){
    return a+b;
}
let result = addNumbers(1, 4);

const addNumberArrow = (a: number, b:number):string => {
    return `${a+b}`;
}
let result2 = addNumberArrow(2, 9);

function multiply(first: number, second?: number, base: number = 0){
    return first*base;
}
let result3 = multiply(23);

console.log({result});
console.log(result);
console.log({result2});
console.log(result2);

export{};