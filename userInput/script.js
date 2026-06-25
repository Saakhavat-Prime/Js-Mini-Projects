let userName = document.getElementById("user-name");
let submitBtn = document.getElementById("submit");
let userInput = document.getElementById("user-input");

let fullName;
// console.log(userInput.value);

submitBtn.addEventListener('click', ()=>{
    fullName = userInput.value;
    // console.log(fullName);
    userName.textContent = `Hello ${fullName}`

});