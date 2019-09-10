// Exercise 0 - Spiritual Self-Portrait
// Isimbi Malika Kabagema
// 10 September 2018
//
// Uses p5's set of shape and colour functions to draw a head
// wearing an afro that Isimbi claims is spiritually just like her.


// setup()
//
// Draws a beautiful face on the canvas and puts hair on it!

function setup() {

  // Set up the canvas and give it a nice pink colour

  createCanvas(500,500);
  background(129,161,35);

  // Draw the head and body (or is it a chin?) in pink as well

  // Add stroke because it adds definition and a glow to the shape
  stroke (255,255,255, 10);
  // Set the nice purple
  fill(177,108,212);
  // The ellipse mode will make it easier to align everything
  ellipseMode(CENTER);
  // Draw the head
  ellipse(250,250,300,400);


  // Draw the googly eyes

  // Draw the white backgrounds of the eyes
  fill (0);
  ellipse(320,225,65,100);

  // Draw the black pupils
  fill(0);
  ellipse(180,225,65,100);


  // Draw the mouth our of an ellipse and a dividing line

  // Lip colour
  stroke (0,0,0);
  fill(84,70,76);
  // Lips
  ellipse(250,380,100,60);
  // Lip divider colour and size
  stroke(0,0,0);
  strokeWeight(4);
  // Lip divider
  line (202,380,299,380);


  // Draw the hat as a main part, brim, and hat band

  noStroke();
  // Hat colour
  fill(200,255,200);
  // Main part of hat
  rect(160,100,180,80);

}

// draw()
//
// Does nothing.

function draw() {
  // Nothing here for now.
}
