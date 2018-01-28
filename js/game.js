const circle = document.querySelector(".game_circle");

const move = (e) => {
    console.log(e.keyCode)
    switch (e.keyCode) {
        case 38:
            circle.style.top = circle.offsetTop - 14 + "px";
            break;
        case 40:
            circle.style.top = circle.offsetTop + 14 + "px";
            break;
        default:
            info.textContent = "kliknięte cokolwiek";
            break;
    }
}

window.addEventListener("keydown", move)