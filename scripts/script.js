let squareSize = 56;
let numberSquares = 0;

(function() {
  createSquares();
  addListenerToButton();
}());

function deleteSquares() {
  const selectSquares = document.querySelectorAll(".square");
  let listLength = selectSquares.length;
  selectSquares.forEach(square => {
    square.remove();
  })
}

function createSquares(numberOfSquares, width) {
  deleteSquares();    
  if (numberOfSquares !== 'undefined') {
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++ ) {
      drawASquare();
    }
  } else {
    for (let i = 0; i < 256; i++) {
      drawASquare();
    }
  } 
  
  applySquareSizing(width);
}

function calculateSquareSizing(numberSquares) {
  if (numberSquares === 0) {
    numberSquares = 16;
  } else if (numberSquares > 100) {
    numberSquares = 100;
    alert("Sorry! Too many squares.");
  }
  const width = 960 / (numberSquares);
  createSquares(numberSquares, width);
}

function applySquareSizing(width) {
  const selectSquares = document.querySelectorAll(".square");
  selectSquares.forEach(square => {
    
    square.setAttribute("style", `width: ${width}px; height: ${width}px`);

  });
}



function drawASquare() {
  const selectContainer = document.querySelector(".square-container");
  const square = document.createElement('div');
  square.classList.add("square");
  square.addEventListener('mouseenter', fillSquare);
  selectContainer.append(square);
}



function addListenerToButton() {
  const selectButton = document.querySelector("input");
  selectButton.addEventListener('click', getValue, false);
}

function getValue(e) {
  numberSquares = window.prompt("How many squares would you like to draw? I will draw an a * a grid.");
  calculateSquareSizing(numberSquares);
  console.log("Getting value! Value is", numberSquares);
}

function fillSquare(e) {
  
  let squareColor = generateColor();
  e.target.style.background = `${squareColor}`;
  console.log("Adding color!");
}

function generateColor() {
  const r = getRndInteger(1, 255);
  const g = getRndInteger(1, 255);
  const b = getRndInteger(1, 255);
  let colorString = `rgb(${r}, ${g}, ${b})`;
  return(colorString);
}
  
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}