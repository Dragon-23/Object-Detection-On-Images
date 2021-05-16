function preload()
{
    tv = loadImage("TV.jpg");
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
     objectDetection.detect(tv, gotResult);
 
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
    image(tv,0,0,450,300);
    fill("red");
    stroke("red");
    text("TV", 40, 25);
    noFill();
    rect(60,20, 310, 275);

}
