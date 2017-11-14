function pizza(...ingredients) {
    ingredients.push('cheese');
    console.log('this pizza has', ingredients);
    return ingredients;
}

let newPizza = new pizza('tomatoes', 'pepperoni', 'sausage');

const TAX = 0.07;
const basePrice = 10.99;
const toppings = 0.99;


let totalCost = (newPizza) => {
    return ((basePrice + (newPizza.length * toppings)) * TAX) + basePrice;
}

let order = (newPizza) => {
    console.log(newPizza);
    totalCost(newPizza);
    console.log(totalCost(newPizza));
}

order(newPizza);