export interface Product {
    description: string,
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 500.0
// }

// const tablet: Product = {
//     description: 'iPad 3',
//     price: 400.0
// }

export interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

// const shoppingCart = [phone, tablet];
// const auxTax = 0.18;

// function getTax(options: TaxCalculationOptions): [number, number]{
// function getTax({tax, products}: TaxCalculationOptions): [number, number]{
export function getTax(options: TaxCalculationOptions): [number, number]{
    let total: number = 0;

    const {tax, products} = options;

    products.forEach(({price}) => {
        total += price;
    })

    return [total, total*tax];
}


// const [total, totalTax] = getTax({
//     products: shoppingCart,
//     tax: auxTax
// })

// console.log('Total', total);
// console.log('Total', totalTax);



// export {};
