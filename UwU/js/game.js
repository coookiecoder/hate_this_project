// home part

let playerNumber = 0;

const input = document.getElementById("playerNumber");

if (input != null)
    input.addEventListener("keypress", function (event) {launchGameIfEnter(event.code)});

function launchGame() {
    if (input.value <= 128 && input.value >= 1) {
        playerNumber = input.value;
        showPage("game");
        history.pushState({page: 'game'}, '', '/game');
    } else {
        alert("Invalid number");
    }
}

function launchGameIfEnter(code) {
    if (code === "Enter") {
        launchGame();
    }
}

// end of home part

// game part

let playerList = [];
let playerIndex = 0;
let player1Index = 0;
let player2Index = 0;
let player1 = "";
let player2 = "";

document.getElementById("nextGame").style.display = "none";

function namePlayer() {
    if (playerIndex === playerNumber) {

    }
    playerList.push(document.getElementById("playerInput").value);
    playerIndex++;

    if (playerIndex >= playerNumber) {
        document.getElementById("nextGame").style.display = "block";
        document.getElementById("playerInput").style.display = "none";
        document.getElementById("addPlayer").style.display = "none";
    }

    console.log(playerIndex);
    console.log(playerNumber);
}

function nextGame() {
    player1 = document.getElementById("player1").textContent = "Player 1 : " + playerList[player1Index];
    player2 = document.getElementById("player2").textContent = "Player 2 : " + playerList[player2Index];

    if (player1 === undefined || player2 === undefined) {
        alert("Please enter a name for both players");
    } else {
        startGame(player1, player2);
    }
}

//end of game part