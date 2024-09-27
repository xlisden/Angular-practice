export class Person {
    // public name: string;
    // public address: string;

    // constructor(){
    //     this.name = 'Anthony Edward Stark';
    //     this.address = 'New York';
    // }
    constructor(
        public firstName: string, 
        public lastName: string, 
        private address?: string
    ) { }
}



// export class Hero extends Person{

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York')
//     }

// }

export class Hero{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        // this.person = new Person(realName, 'New York');
    }
    
}

const tony = new Person('Anthony Edward', 'Stark', 'New York');
const ironman = new Hero('Iron Man', 45, 'Anthony Edward Stark', tony);

console.log(ironman);