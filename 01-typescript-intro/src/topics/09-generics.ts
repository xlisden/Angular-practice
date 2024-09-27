export function whatsMyType<T>(argument: T): T{
    return argument;
}

let amString = whatsMyType<string>('Waza mundo');
let amNumber = whatsMyType(23323.18);
let amArray = whatsMyType([1,2,2,3]);

console.log(amString.split(' '));
console.log(amNumber.toFixed());
console.log(amArray.join('-'));