// se usa la T para el primer generico luego se pueden poner otras letras si se envian mas argumentos

function whatsMyType<T>(argument:T): T {
    return argument;
}

const amIstring = whatsMyType<string>('Hola Mundo');
const amInumber = whatsMyType<number>(100);
const amIarray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIstring.split(' '));
console.log(amInumber.toFixed());
console.log(amIarray.join('-'));
