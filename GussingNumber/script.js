let minimum = 1;
let maximum = 100;
let answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = prompt(`guess number between ${minimum} - ${maximum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        alert("please Enter a valid Number");
    } else if (guess > maximum || guess < minimum) {
        alert("please Enter a valid Number");
    } else {
        attempts++;
        if (guess > answer) {
            alert("too high try again");
        } else if (guess < answer) {
            alert("too low try again");

        } else {
            alert(`correct  the answer was ${answer} it took you ${attempts} attempts`);
            running = false;


        }
    }

}