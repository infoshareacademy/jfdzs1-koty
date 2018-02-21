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

function obstaclesAndCoins () {

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


//ta funcja musi być w timeoutcie

    function throwOnBoard() {
        var object = throwRandomObject();

        if (object === "obstacle") {
            var obstacle = document.createElement("div");
            obstacle.classList.add("obstacle");
            object = obstacle;
        } else {
            var coin = document.createElement("div");
            coin.classList.add("coin");
            object = coin;
        }

        var objectOnBoard = {
            type: object,
            x: divWidth + "px",
            y: Math.random() * (divHeight - 50) + "px"
        };

        // object.style.top = objectOnBoard.y;
        // object.style.left = objectOnBoard.x;

            console.log(objectOnBoard);
            //ustawmy x i y  przeszkody (pozycja), x jako szerokość planszy + 50px, wysokość randamowo w granicach wysokości planszy


        //dodać obiekt do gameBoard (append)
        // window.requestAnimationFrame i przesuwać x obiektu w lewo ok 5px
            gameBoard.append(objectOnBoard);
            objects.push(objectOnBoard);
            console.log(objects);
        }


        setTimeout(throwOnBoard(), 500);
    }


//na koniec każdy obiekt który wychodzy poza planszę usówamy z domu i tabicy objects, pętla w requestAnimationFrame która będzie sprawdzać czy jest poza planszą


window.onresize = function() {
    resize();
};
obstaclesAndCoins();