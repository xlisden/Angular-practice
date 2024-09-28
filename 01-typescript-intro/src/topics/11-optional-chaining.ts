export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Juanita'
}
const passenger2: Passenger = {
    name: 'Tyler',
    children: ['Rossie', 'Junie', 'Tom']
}

const printChildren  = (passenger: Passenger): number => {
    const nroChildren = passenger.children?.length || 0;
    // const nroChildren = passenger.children!.length;

    console.log(passenger.name, '->', nroChildren);

    return nroChildren;
}

printChildren(passenger1);