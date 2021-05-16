function preload()
{
    bottle = loadImage("bottle.jpg");
}

function setup()
{
    canvas = createCanvas(450,300);
    canvas.position(400, 200);
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
 
     
     
 }
 
 function modelLoaded()
 {
     console.log("Model Loaded!");
     status = true;
     objectDetection.detect(bottle, gotResult);
 
 }
 
 
 function gotResult(error, results)
 {
     if(error)
     {
         console.error(error);
     }
     console.log(results);
 }

function draw()
{
    image(bottle,0,0,450,300);
    fill("red");
    stroke("red");
    text("Bottle", 50, 25);
    noFill();
    rect(100,25, 280, 250);

}