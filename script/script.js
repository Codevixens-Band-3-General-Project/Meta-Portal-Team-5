//Counters
 let totalItems = document.getElementById("totalItems");
 let totalOwners = document.getElementById("totalOwners");
 let price = document.getElementById("price");
 let vTraded = document.getElementById("vTraded");
 
 let interval = 4000;

// Function to update the integer counter 
function updateCounter(element, endValue) {
let startValue = 10; 
let duration = Math.floor(interval / (endValue - startValue));
let counter = setInterval(function () {
 startValue += 50;
 element.textContent = startValue;
 if (startValue >= endValue) {
   element.textContent = endValue;
   clearInterval(counter);
 }
}, duration);
}



function updateCounterTwo(element, endValue){
 let startValue = 0;
let duration = Math.floor(interval / (endValue - startValue));
let counter = setInterval(function () {
 startValue += 1;
 element.textContent = startValue.toFixed(1); 
 if (startValue >= endValue) {
   element.textContent = endValue.toFixed(1); 
   clearInterval(counter);
 }
}, duration);
}

// Start the counters for each element
updateCounterTwo(totalOwners, 3.9);
updateCounterTwo(price, 2.4);
updateCounter(totalItems, 9999);
updateCounter(vTraded, 144);

