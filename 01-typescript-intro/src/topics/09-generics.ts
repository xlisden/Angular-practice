export function whatsMyType<T>(argument: T): T{
    return argument;
}

let amString = whatsMyType<string>('mundo');
let amNumber = whatsMyType(23323.18);
let amArray = whatsMyType<number[]>([1,2,2,3]);

console.log(amString.split(' '));
console.log(amNumber.toFixed());
console.log(amArray.join('-'));