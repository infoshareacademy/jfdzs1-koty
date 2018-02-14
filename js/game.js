const circle = document.querySelector(".game_circle");
var moveStep = 50;
// var divHeight = document.getElementsByClassName('game_board').offsetHeight; - tu ma być zmienna, która pobierze wysokość planszy gry

const move = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 38:
            if(circle.offsetTop > 50)
                circle.style.top = circle.offsetTop - moveStep + "px";
            break;
        case 40:
            // if(circle.offsetTop + 50 < tu musi być zmienna, która pobiera wysokość planszy)
            circle.style.top = circle.offsetTop + moveStep + "px";
            break;
        default:
            info.textContent = "kliknięte cokolwiek";
            break;
    }
}

window.addEventListener("keydown", move)

// ********************//
// OBSTACLES AND COINS //
//*********************//

function obstaclesAndCoins () {

    const gameBoard = document.getElementsByClassName("game_board");
    var objects = [];
    var startTime = Date.now();

    var obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");

    var coin = document.createElement("div");
    coin.classList.add("coin");


    
    function throwRandomObject() {
        var objectTipe;

        if (Math.random() < 0.50) {
            objectTipe = obstacle;
        } else {
            objectTipe = coin;
        }
    }




}

