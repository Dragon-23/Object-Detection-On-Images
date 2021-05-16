function preload()
{
    clock = loadImage("clock.jpg");
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
     objectDetection.detect(clock, gotResult);
 
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
    image(clock,0,0,450,300);
    fill("red");
    stroke("red");
    text("Clock", 20, 50);
    noFill();
    rect(75,50, 250, 210);

}
