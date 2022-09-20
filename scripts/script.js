let squareSize = 0;
let numberofSquares = 16;

(function() {
  calculateSquareSizing(numberofSquares);
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
    for (let i = 0; i < (numberOfSquares * numberOfSquares); i++ ) {
      drawASquare();
      assignIDs(i);
    }
  } else {
    for (let i = 0; i < 256; i++) {
      drawASquare();
      assignIDs(i);
    }
  } 
  applySquareSizing(width);
}

function assignIDs(id) {
  const nodes = document.querySelectorAll(".square");
  const last = nodes[nodes.length - 1];
  last.setAttribute('id', `square-${id}`);
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
  numberSquares = window.prompt("How many squares would you like to draw? (max: 100x100)");
  if (numberSquares.length == 0) {
    numberSquares = 16;
  }
  console.log(numberSquares.length);
  calculateSquareSizing(numberSquares);
}

function fillSquare(e) {
  const sqID = e.target.id;
  const sqToShade = document.getElementById(`${sqID}`);
  const sqStyle = getComputedStyle(sqToShade); 
  if (sqStyle.opacity < 1) {
    let opacityNum = Number(sqStyle.opacity);
    const newOpacity = opacityNum + 0.05;
    e.target.style.opacity = `${newOpacity}`;
  }
  
 
  
}

/*function generateColor() {
  const r = getRndInteger(1, 255);
  const g = getRndInteger(1, 255);
  const b = getRndInteger(1, 255);
  let colorString = `rgb(${r}, ${g}, ${b})`;
  return(colorString);
}
  
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}*/
