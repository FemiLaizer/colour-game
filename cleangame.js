let numSquares = 6;
let colors = generateRandomColor(numSquares);

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let modeBtn = document.querySelectorAll(".mode");
let h1 = document.querySelector("h1");
let pickedColor = pickColor();

for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function () {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; //this is shorter way of "if statement"
        reset();
    })
}

function reset() {
    //generate all new color
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to pick color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLORS";
    message.textContent = "";
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener('click', function () {
    reset();
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //Here we add initial colors to the square "div"
    squares[i].style.backgroundColor = colors[i];

    //Here we add eventListener to the squares
    squares[i].addEventListener('click', function () {
        //Here we grab the color of the square we clicked
        let clickedColor = this.style.backgroundColor;

        //Here we compare the clicked color with pickedColor
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}

function changeColor(color) {
    //loop through all the square
    for (let i = 0; i < squares.length; i++) {

        //change the square colors
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomColor(num) {
    //We make an array
    let arr = [];

    //repeat num times
    for (let i = 0; i < num; i++) {

        //get random colors and push to the array
        arr.push(randomColors());
    }
    //We return that array
    return arr;
}

function randomColors() {
    //We generate random color for red
    let r = Math.floor(Math.random() * 256);
    //We generate random color for green
    let g = Math.floor(Math.random() * 256);
    //We generate random color for blue
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}