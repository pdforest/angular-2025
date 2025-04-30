function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
class SuperClass {

    public myProperty: string = '123ABC';

    public print(){
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);
