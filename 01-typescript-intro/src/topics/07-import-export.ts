import {Product, taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [{
    description: 'Nokia',
    price: 150
},
{
    description: 'iPad',
    price: 250
}
];

const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart 
});

console.table(shoppingCart);

console.table({total, tax});
