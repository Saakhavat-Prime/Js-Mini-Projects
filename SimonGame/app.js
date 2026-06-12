let gameSeq = [];   // store game colors
let userSeq = [];   //store user colors


let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');
//    game startiing with keypress event 
document.addEventListener("keypress", function () {
    // console.log("game started");
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});
//   game flash function 
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}
//user flach function
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}
//   levelUp
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    //random btn chooose

    let randomIdx = Math.floor(Math.random() * 4);
    // console.log(randomIdx)
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);

}
//  checkAns when user click right color 
function checkAns(idx) {
    // console.log(`curr level ${level}`);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
        // console.log("same value");
    } else {
        h2.innerHTML = `Game Over!<b> your score was ${level}</b><br> Press any key to start.`;
        reset();
    }
}

// call this function when user click color 
function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
}
//  button event
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
   //highScore
    //  let highScore = Math.max(gameSeq.length);
    //     const h4 = document.createElement('h4');
    //     h4.innerText = `highScore = ${highScore}`;
    //     document.body.append(h4);
