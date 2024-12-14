function displayMessage() {
    if (document.getElementById("playerNumber").value < 128 && document.getElementById("playerNumber").value > 0) {
        alert(document.getElementById("playerNumber").value);
    } else {
        alert("Invalid number");
    }
}