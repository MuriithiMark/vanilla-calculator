let priceInput = document.getElementById("price-input");
let quantityInput= document.getElementById("quantity-input");
let total = document.getElementById("total-amount");
console.log(quantityInput, priceInput, total);

let price = 0;
let quantity = 0;


const updateTotal = (priceValue, quantityValue) => {
    total.innerText = priceValue * quantityValue;    
}

const priceUpdate = (event) => {
    let priceInput = event.target.value;
    price = parseInt(priceInput);
    if(!typeof price === "number") {
        price = 0;
        return;
    }
    updateTotal(price, quantity);  
} 

const quantityUpdate = (event) => {
    let quantityInput = event.target.value;
    quantity = parseInt(quantityInput);
    if(!typeof quantity === "number") {
        quantity = 0;
        return;
    }
    updateTotal(price, quantity); 
}

priceInput.addEventListener("input", priceUpdate);
quantityInput.addEventListener("input", quantityUpdate);