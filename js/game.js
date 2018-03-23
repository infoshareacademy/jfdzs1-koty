const circle = document.querySelector(".game_circle");
var moveStep = 50;
var divHeight = 0;
var divWidth = 0;

function resize()
{
    divHeight = window.innerHeight;
    document.getElementById("game_board").style.height = divHeight + "px";
    divWidth = window.innerWidth;
    document.getElementById("game_board").style.width = divWidth + "px";
}
resize();


const move = (e) => {
    //console.log(e.keyCode);
    switch (e.keyCode) {
        case 38:
            if(circle.offsetTop > 50)
                circle.style.top = circle.offsetTop - moveStep + "px";
            break;
        case 40:
            if(circle.offsetTop + 50 < divHeight)
            circle.style.top = circle.offsetTop + moveStep + "px";
            break;
        default:
            info.textContent = "kliknięte cokolwiek";
            break;
    }
}

window.addEventListener("keydown", move);

// ********************//
// OBSTACLES AND COINS //
//*********************//

    var gameBoard = document.getElementById("game_board");
    var objects = [];
    var startTime = Date.now();

    function throwRandomObject() {
        var objectType;

        if (Math.random() < 0.50) {
            objectType = "obstacle";
        } else {
            objectType = "coin";
        }

        return objectType;
    }

    function throwOnBoard() {
        var selectedElement = throwRandomObject();

        if (selectedElement === "obstacle") {
            var obstacle = document.createElement("div");
            obstacle.classList.add("obstacle");
            selectedElement = obstacle;

        } else {
            var coin = document.createElement("div");
            coin.classList.add("coin");
            selectedElement = coin;
        }

        function placeSelectedElement() {
            selectedElement.style.position = "absolute";
            selectedElement.style.left = divWidth - 20 + 'px';
            selectedElement.style.top = Math.random() * (divHeight - 50) + "px";
        }

        placeSelectedElement();

        gameBoard.append(selectedElement);

        function move() {
            selectedElement.style.left =  parseInt(selectedElement.offsetLeft, 10) - 5 + 'px';

            if(parseInt(selectedElement.offsetLeft, 10) <= 10) {
               gameBoard.removeChild(selectedElement);
            }
            window.requestAnimationFrame(move);
        }
        window.requestAnimationFrame(move);

        objects.push(selectedElement);
    }

    var gameTime = setInterval(throwOnBoard,1000);
    setTimeout(function() { clearInterval(gameTime); }, 30000);

window.onresize = function() {
resize();
};