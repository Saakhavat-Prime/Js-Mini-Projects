let checkbox = document.getElementById('checkbox');
let visa = document.getElementById('visa');
let mastercard = document.getElementById('mastercard');
let paypal = document.getElementById('paypal');
let submit = document.getElementById('submit');
let showchecked = document.getElementById('showchecked');
let showslectedcard = document.getElementById('showslectedcard');



submit.onclick = function () {
    if (checkbox.checked) {
        showchecked.textContent = `you are subscribe`;

    } else {
        showchecked.textContent = `you are not subscribe`;

    }
    if (visa.checked) {
        showslectedcard.textContent = `you are paying with visa`;

    } else if (mastercard.checked) {
        showslectedcard.textContent = `you are paying with mastercard`;

    } else if (paypal.checked) {
        showslectedcard.textContent = `you are paying with paypal`;

    } else {
        showslectedcard.textContent = `please select payment method`;

    }

}