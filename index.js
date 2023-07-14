const container = document.querySelector('.container');
function makeGrid () {
  let amount = 16;
  container.style.display="grid";
  container.style.gridTemplateRows = `repeat(${amount}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;

  for (let i=1; i<=256; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.style.border = "1px solid grey";
    container.insertAdjacentElement("beforeend", square);
  }
};
makeGrid();

function draw () {
  var mouseIsDown = false;
  const squares = document.querySelectorAll('.square, .div');
  squares.forEach(square => {
    square.addEventListener('mousedown', function() {
      mouseIsDown = true;
    });
    
    square.addEventListener('mousemove', function(event) {
      if(mouseIsDown){
        event.target.style.backgroundColor="red";
      }
    })
    
    square.addEventListener('mouseenter', function(event) {
      if(event.buttons === 1){
        event.target.style.backgroundColor="red";
      }
    })
  })
  container.addEventListener('mouseleave', function() {
    mouseIsDown = false;
  });

  document.addEventListener('mouseup', function () {
    mouseIsDown = false;
  });

  document.addEventListener('mousedown', function() {
    mouseIsDown = true
  })
};
draw ();


const size = document.getElementById("size");
size.addEventListener('click', function() {
  const userInput = prompt('Please enter a number between 2 and 100:');
  console.log(userInput);
});
