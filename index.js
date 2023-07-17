//Grid Size buttons
const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");
small.addEventListener('click', function() {
  let userInput = "16"
  getSize (userInput);
});
medium.addEventListener('click', function() {
  let userInput = "32"
  getSize (userInput);
});
large.addEventListener('click', function() {
  let userInput = "64"
  getSize (userInput);
});

//Clears previous HTML gridlines to insert new ones
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

//Even listeners for color buttons
//const black = document.getElementById("black");
const eraser = document.getElementById("eraser");
const random = document.getElementById("random");
const shader = document.getElementById("shader");
const picker = document.getElementById("picker");
const colorPicker = document.getElementById("colorpicker");
let color = "black";

black.addEventListener('click', function() {
  color = "black";
});
eraser.addEventListener('click', function() {
  color = "white";
});
random.addEventListener('click', function() {
  color = "random";
});

colorPicker.addEventListener('input',function() {
   color = colorPicker.value;
   console.log(color);
});

makeGrid(16);
draw ();


//default, toggle, fix pick:
  // turn off when pick, rainbow, eraser
// decorate buttons, move around
// header, page design / font 