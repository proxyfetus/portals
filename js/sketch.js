let img;

function preload() {
    img = loadImage('../statics/IMG_1022.PNG'); // Load your image here
}

function setup() {
    createCanvas(400, 400); // Create a canvas with transparent background
    angleMode(DEGREES); // Set the angle mode to degrees
    //   colorMode(ARGB); // Set the color mode to ARGB
}

function draw() {
    background(0, 0, 0, 0); // Set the background to be fully transparent
    clear();
    // Translate to the center of the canvas
    translate(width / 2, height / 2);

    // Rotate the image by a certain angle
    rotate(frameCount);

    // Draw the image at the center of the canvas
    imageMode(CENTER);
    image(img, 0, 0, 200, 200); // Change the size of the image as you need

    // Reset the rotation angle to keep it within 360 degrees
    if (frameCount == 360) {
        frameCount = 0;
    }
}
