function preload()
{
    notebook = loadImage("notebook.jpg");
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
     objectDetection.detect(notebook, gotResult);
 
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
    image(notebook,0,0,450,300);
    fill("red");
    stroke("red");
    text("Notebook", 5, 25);
    noFill();
    rect(57,10, 320, 270);

}