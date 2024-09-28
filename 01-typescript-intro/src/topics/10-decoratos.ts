function classDecorator<T extends {new (...args: any[]): {} }> (
    constructor: T
){
    return class extends constructor{
        newProperty = 'new property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public property: string = 'wazaaaaa';

    print(){
        console.log('Waza mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);