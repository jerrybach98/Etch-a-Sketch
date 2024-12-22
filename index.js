//Grid Size buttons
const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");
small.addEventListener('click', function() {
  let userInput = "16"
  small.style.backgroundColor="#84a4fc";
  small.style.color="white";
  medium.style.backgroundColor="white";
  medium.style.color="black";
  large.style.backgroundColor="white";
  large.style.color="black";
  getSize (userInput);
});
medium.addEventListener('click', function() {
  let userInput = "32"
  medium.style.backgroundColor="#84a4fc";
  medium.style.color="white";
  small.style.backgroundColor="white";
  small.style.color="black";
  large.style.backgroundColor="white";
  large.style.color="black";
  getSize (userInput);
});
large.addEventListener('click', function() {
  let userInput = "64"
  large.style.backgroundColor="#84a4fc";
  large.style.color="white";
  small.style.backgroundColor="white";
  small.style.color="black";
  medium.style.backgroundColor="white";
  medium.style.color="black";
  getSize (userInput);
});

//Clears previous grid to insert new one
function clearGrid() {
  container.innerHTML = '';
}

//Clears grid, generates new one based on user input, then calls draw function on new grid
function getSize (userInput) {
  if (userInput >=2 && userInput<=100) {
    clearGrid()
    makeGrid(userInput);
    draw ();
  }
};

//Grid and .div generation
const container = document.querySelector('.container');
function makeGrid (userInput) {
  container.style.display="grid";
  container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;

  for (let i=1; i<=userInput*userInput; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.style.border = "1px solid lightGrey";
    square.style.backgroundColor = "white";
    container.insertAdjacentElement("beforeend", square);
  }
};

// Draw functions with mouse event listeners  
function draw () {
  var mouseIsDown = false;
  const squares = document.querySelectorAll('.square, .div');
  squares.forEach(square => {
    square.addEventListener('mousedown', function(event) {
      if (mouseIsDown = true && color==="random") {
        event.target.style.backgroundColor=`hsl(${Math.random() * 360}, 100%, 50%)`;
      }
      else if (mouseIsDown = true && color==="shader"){
        //event.target.style.filter=brightness(0.5);
        square.classList.add('shader');
      } 
      else if (mouseIsDown = true){
        event.target.style.backgroundColor=`${color}`}
    });
    
    square.addEventListener('mousemove', function(event) {
      if(mouseIsDown) {
        event.target.style.backgroundColor=`${color}`}
    });
    
    square.addEventListener('mouseenter', function(event) {
      if(event.buttons === 1 && color==="random") {
        event.target.style.backgroundColor=`hsl(${Math.random() * 360}, 100%, 50%)`;
      }
      else if (event.buttons === 1){
        event.target.style.backgroundColor=`${color}`}
    });
  });

  container.addEventListener('mouseleave', function() {
    mouseIsDown = false;
  });

  document.addEventListener('mouseup', function () {
    mouseIsDown = false;
  });

  document.addEventListener('mousedown', function() {
    mouseIsDown = true
  });
//Clear grid button, sets background to white
  const reset = document.getElementById("clear");
  reset.addEventListener('click', function() {
    squares.forEach( square => {
      square.style.backgroundColor="white";
    });
  });
//Toggles grid lines
  const toggle = document.getElementById("toggle");
  toggle.addEventListener('click', function() {
    toggle.style.backgroundColor="#84a4fc";
    toggle.style.color="white";
    squares.forEach( square => {
      const borderStyle = square.style.border.trim().toLowerCase();
      if (borderStyle === "1px solid lightgrey") {
        square.style.border = "0px solid white";
      } else if (borderStyle === "0px solid white") {
          square.style.border = "1px solid lightgrey";
      };
    });
  });
  
};

//Event listeners for buttons
const selector = document.getElementsByClassName("selector");
const toggleContainer = document.getElementById("toggleContainer");
const black = document.getElementById("black");
const eraser = document.getElementById("eraser");
const random = document.getElementById("random");
const shader = document.getElementById("shader");
const colorpicker = document.getElementById("colorpicker");
const toggle = document.getElementById("toggle");
const clear = document.getElementById("clear");
let color = "black";

//Toggle default buttons on startup
window.addEventListener("load", (event) => {
  black.style.backgroundColor="#84a4fc";
  black.style.color="white";
  small.style.backgroundColor="#84a4fc";
  small.style.color="white";
});

//Change drawing style when clicked and toggles/untoggles respective buttons
black.addEventListener('click', function() {
  color = "black";
  black.style.backgroundColor="#84a4fc";
  black.style.color="white";
  random.style.backgroundColor="white";
  random.style.color="black";
  eraser.style.backgroundColor="white";
  eraser.style.color="black";
});
eraser.addEventListener('click', function() {
  color = "white"
  eraser.style.backgroundColor="#84a4fc";
  eraser.style.color="white";
  random.style.backgroundColor="white";
  random.style.color="black";
  black.style.backgroundColor="white";
  black.style.color="black";
});
random.addEventListener('click', function() {
  color = "random";
  random.style.backgroundColor="#84a4fc";
  random.style.color="white";
  eraser.style.backgroundColor="white";
  eraser.style.color="black";
  black.style.backgroundColor="white";
  black.style.color="black";
});

colorpicker.addEventListener('input',function() {
  color = colorpicker.value;
  random.style.backgroundColor="white";
  random.style.color="black";
  eraser.style.backgroundColor="white";
  eraser.style.color="black";
  black.style.backgroundColor="white";
  black.style.color="black";
});


makeGrid(16);
draw ();