
interface Passenger {
    name: string;
    children?:string[];
}


const passenger1: Passenger = {
    name: 'Pol'
}

const passenger2: Passenger = {
    name: 'Ana',
    children: ['Caro', 'Vicky', 'Mer']
}

const printChildren = (passenger: Passenger) => {

    // ? safe navigation operator
    // evalua la condicion y permite encadenar otra accion
    // si viene children dame el length y si no viene dame 0
    const howManyChildren = passenger.children?.length || 0;
    
    // ! not null assertion operator
    // que indica que confie en nosotros que siempre va a venir children
    // pero si no lo mandamos sale un undefined
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name + ` tiene ${howManyChildren} hijos`);
}


printChildren(passenger1);
printChildren(passenger2);
