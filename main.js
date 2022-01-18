// Pong by Ibrahim Ismayilov

// Setting up canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let mouseX, mouseY;
let xOne = Math.random() * 800;
let xTwo = Math.random() * 800;
let yOne = Math.random() * 600;
let yTwo = Math.random() * 600;
let widthOne = Math.random() * 40;
let widthTwo = Math.random() * 40;
let widthThree = Math.random() * 40;
let heightOne = Math.random() * 40;
let heightTwo = Math.random() * 40;
let heightThree = Math.random() * 40;



function mousemoveHandler(event) {
    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect()
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

requestAnimationFrame(draw);

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(mouseX, mouseY, widthOne, heightOne);

    ctx.fillRect(xOne, yOne, widthTwo, heightTwo);
    ctx.fillRect(xTwo, yTwo, widthThree, heightThree);
    requestAnimationFrame(draw);
}