let inputSlider = document .getElementById("inputSlider");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");




// showing input slider value
sliderValue.textContent =inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})