// let numSquares = 6;
// let colors = generateRandomColor(numSquares);
// // [
// //     "rgb(255, 0, 0)",
// //     "rgb(255, 255, 0)",
// //     "rgb(0, 255, 0)",
// //     "rgb(0, 255, 255)",
// //     "rgb(0, 0, 255)",
// //     "rgb(255, 0, 255)"
// // ];

// let squares = document.querySelectorAll(".square");
// let colorDisplay = document.getElementById("colorDisplay");
// let message = document.querySelector("#message");
// let resetButton = document.querySelector("#reset");
// let easyBtn = document.querySelector("#easyBtn");
// let hardBtn = document.querySelector("#hardBtn");
// let h1 = document.querySelector("h1");
// let pickedColor = pickColor();

// easyBtn.addEventListener('click', function () {
//     numSquares = 3;
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     //loop the first 3 squares then hide the last 3
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener('click', function () {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     //loop the 6 squares then unhide the last 6
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

// resetButton.addEventListener('click', function () {
//     //generate all new color
//     colors = generateRandomColor(numSquares);
//     //pick a new random color from array
//     pickedColor = pickColor();
//     //Change colorDisplay to pick color
//     colorDisplay.textContent = pickedColor;
//     this.textContent = "NEW COLORS";
//     message.textContent = "";
//     //change colors of squares
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1.style.backgroundColor = "steelblue";
// })

// colorDisplay.textContent = pickedColor;

// for (let i = 0; i < squares.length; i++) {
//     //Here we add initial colors to the square "div"
//     squares[i].style.backgroundColor = colors[i];

//     //Here we add eventListener to the squares
//     squares[i].addEventListener('click', function () {
//         //Here we grab the color of the square we clicked
//         let clickedColor = this.style.backgroundColor;

//         //Here we compare the clicked color with pickedColor
//         if (clickedColor === pickedColor) {
//             message.textContent = "Correct!";
//             changeColor(clickedColor);
//             h1.style.backgroundColor = clickedColor;
//             resetButton.textContent = "Play Again?";
//         } else {
//             this.style.backgroundColor = "#232323";
//             message.textContent = "Try Again";
//         }
//     });
// }

// function changeColor(color) {
//     //loop through all the square
//     for (let i = 0; i < squares.length; i++) {

//         //change the square colors
//         squares[i].style.backgroundColor = color;
//     }
// }

// function pickColor() {
//     let randomColor = Math.floor(Math.random() * colors.length);
//     return colors[randomColor];
// }

// function generateRandomColor(num) {
//     //We make an array
//     let arr = [];

//     //repeat num times
//     for (let i = 0; i < num; i++) {

//         //get random colors and push to the array
//         arr.push(randomColors());
//     }
//     //We return that array
//     return arr;
// }

// function randomColors() {
//     //We generate random color for red
//     let r = Math.floor(Math.random() * 256);
//     //We generate random color for green
//     let g = Math.floor(Math.random() * 256);
//     //We generate random color for blue
//     let b = Math.floor(Math.random() * 256);
//     return "rgb(" + r + ", " + g + ", " + b + ")";
// }