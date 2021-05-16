function preload()
{
    ac = loadImage("ac.jpg");
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
     objectDetection.detect(ac, gotResult);
 
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
    image(ac,0,0,450,300);
    fill("red");
    stroke("red");
    text("AC", 20, 20);
    noFill();
    rect(55,15, 370, 270);

}
