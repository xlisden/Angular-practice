import { Product, getTax } from './06-function-destructuring';

const shoppingCart: Product[] = [
  {
    description: "RedmiNote 13",
    price: 500.0,
  },
  {
    description: "iPad 3",
    price: 400.0,
  },
];

const [total, tax] = getTax({
    products: shoppingCart,
    tax: 0.18
});

console.log('Total:', total)
console.log('Tax:', tax);