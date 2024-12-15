const homeDiv = document.getElementById("home");
const gameDiv = document.getElementById("game");

function showPage(page) {
    console.log(page);
    if (page === "home") {
        homeDiv.style.display = "block";
        gameDiv.style.display = "none";
    } else if (page === "game") {
        homeDiv.style.display = "none";
        gameDiv.style.display = "block";
    }
}

window.onpopstate = (event) => {
    if (event.state) {
        showPage(event.state.page);
    } else {
        showPage('home');
    }
};