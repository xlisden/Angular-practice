const skills: string[] = ['Normal Attack', 'Element', 'Brust'];

interface Character{
    name: string,
    hp: number,
    skills: string[],
    region?: Region
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

let klee: Character = {
    name: 'Klee',
    hp: 2000,
    skills,
    region: Region.Mondstadt
};

console.table(klee)

export{};