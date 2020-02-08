// i created three alert to show the game is about to start

alert("BEGIN THE GAME");
alert("CLICK ON THE ROCK,PAPER,SCISSOR AND SEE THE RESULT!");
alert("HAVE FUN!!!!!!!");

// this is my function my_game(a)
function my_game(a) {
    // this math.floor return largest interger less than 3 or equal to 3
    let j = Math.floor(Math.random() * 3 + 1);
    document.getElementById("result").innerText = "Wait!";
    let k = "";
    if (a === 1) {
        if (j === 1) {
            k = "Tie";
        } else if (j === 2) {
            k = "you lost"
        } else {
            k = "you won"
        }
    } else if (a === 2) {

        if (j === 1) {
            k = "you won";
        } else if (j === 2) {
            k = "Tie"
        } else {
            k = "you lost"
        }
    } else {
        if (j === 1) {
            k = "you lost";
        } else if (j === 2) {
            k = "you won"
        } else {
            k = "Tie"
        }
    }
    let b="";
    switch (j) {
        case 1:
            b = "Rock";
            break;
        case 2:
            b = "paper";
            break;
        case 3:
            b = "scissor"
    }
    document.getElementById("result").innerText = "Computer picked " + b+ ", " + k;
}
