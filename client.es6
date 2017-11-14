function pizzaToppings(...ingredients) {
    ingredients.push('cheese');
    return ingredients;
}

let git  = new pizzaToppings('tomatoes', 'pepperoni', 'sausage');

const TAX = 0.07;
const smPizza = 8.99;
const mdPizza = 10.99;
const lgPizza = 12.99;
const topPrice = 0.99;

let order = (toppings, size) => {
    let totalCost = (toppings, size) => {
        return ((size + (toppings.length * topPrice)) * TAX) + size + (toppings.length * topPrice);
    }
    return totalCost(toppings, size);
}

let revenue = order(toppings, mdPizza);

console.log(revenue);