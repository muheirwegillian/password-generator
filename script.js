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

genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword()
})

let lowerchars = "abcdefghijklmnopqrstuvwxyz"
let upperchars = " ABCDEFGHIJKLLMNOPQRSTUVWXYZ"
let allNumbers = "0123456789"
let allSymbols =  "@!#$%^&*"
// function to generate password
function generatePassword(){

    let genPassword = "";
    let allChars = "";

        allChars += lowercase.checked ? lowerchars : "";
        allChars += uppercase.checked ? upperchars : "";
        allChars += number.checked ? allNumbers : "";
        allChars += Symbols.checked ? allSymbols : "";

  //genPassword =upperchars.charAt(Math.floor(Math.random() * upperchars.length));
    return genPassword
}

