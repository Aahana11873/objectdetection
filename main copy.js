img="";
status = "";
objects=[];
function preload(){
    img=loadImage("bedroom.jpg")
}
function setup(){
    function setup(){
        canvas=createCanvas(400,400);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(400,400);
        video.hide();
        objectDetector=ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById("status").innerHTML="Status :Detecting Object";
    }
}
function modelLoaded(){
    console.log("model Loaded");
    status=true;
}
function gotResult(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(img,0,0,640,420);
   fill("blue");
   text("bed",215,75);
   noFill();
   stroke("red")
   rect(200,60,400,350)
}