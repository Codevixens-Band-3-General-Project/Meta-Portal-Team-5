
const input = document.getElementsByClassName('inputForm')


const form = document.getElementsByTagName('form');
const inpu = document.querySelector('.inputForm');

inpu.addEventListener('mouseover', inputForm())

form.addEventListener('submit', function(event) {
    event.preventDefault();

});



function inputForm() {
    inpu.style.cursor = "pointer";
    inpu.style.border = "2px solid #cc00ff";
}

inputForm(); 

