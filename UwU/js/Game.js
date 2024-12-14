const input = document.getElementById("playerNumber");

function launchGame() {
    if (input.value <= 128 && input.value >= 1) {
        window.location.href = `game.html?value=${input.value}`;
    } else {
        alert("Invalid number");
    }
}

function launchGameIfEnter(code) {
    if (code === "Enter") {
        launchGame();
    }
}

function nextGame() {
    const value = new URLSearchParams(window.location.search).get("value");

    alert(value);
}

if (input != null)
    input.addEventListener("keypress", function (event) {launchGameIfEnter(event.code)});