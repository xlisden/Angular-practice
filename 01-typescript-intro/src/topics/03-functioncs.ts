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
console.log(result3);

interface Character{
    name: string,
    hp: number,
    region?: Region
    showHp: () => void;
}

enum Region {
    Mondstadt,
    Liyue,
    Inazauma,
    Sumeru,
    Fontaine,
    Natlan,
    Snezhnaya
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const klee: Character = {
    name: 'Klee',
    hp: 2000,
    region: Region.Mondstadt,
    showHp(){
        console.log(this.hp);
    }
};

klee.showHp();

healCharacter(klee, 29);

klee.showHp();


export{};