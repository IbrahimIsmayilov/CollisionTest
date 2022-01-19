// Pong by Ibrahim Ismayilov

// Setting up canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let mouseX, mouseY;

let mouseBox = {
    w: Math.random() * 60 + 10,
    h: Math.random() * 60 + 10,
}

let testBox1 = {
    x: Math.random() * 600,
    y: Math.random() * 600,
    w: Math.random() * 60 + 10,
    h: Math.random() * 60 + 10,
}

let testBox2 = {
    x: Math.random() * 600,
    y: Math.random() * 600,
    w: Math.random() * 60 + 10,
    h: Math.random() * 60 + 10,
}

// Event Listener
document.addEventListener("mousemove", mousemoveHandler)

function mousemoveHandler(event) {
    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect()
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

requestAnimationFrame(draw);
function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(mouseX, mouseY, mouseBox.w, mouseBox.h);

    ctx.fillRect(testBox1.x, testBox1.y, testBox1.w, testBox1.h);
    ctx.fillRect(testBox2.x, testBox2.y, testBox2.w, testBox2.h);
    if (mouseX + mouseBox.w > testBox1.x && mouseX < testBox1.x + testBox1.w && mouseY + mouseBox.h > testBox1.y && mouseY < testBox1.y + testBox1.h || mouseX + mouseBox.w > testBox2.x && mouseX < testBox2.x + testBox2.w && mouseY + mouseBox.h > testBox2.y && mouseY < testBox2.y + testBox2.h ) {
        console.log("collision");
    }
    requestAnimationFrame(draw);
}