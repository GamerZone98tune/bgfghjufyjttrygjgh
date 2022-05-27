nose_x=""
nose_y=""
function preload(){
    clownimg=loadImage("https://i.postimg.cc/05tRm9HY/emovebg-Clown-Nose-PNG-Image.png")
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",getPoses)
}
function modelLoaded()
{
    console.log("poseNet is innitaliesed")
}
function getPoses(results)
{
    if(results.length>0){
        console.log(results)
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
        console.log(nose_x,nose_y)
    }
}
function draw(){
    image(video,0,0,300,300)
   /*fill("blue")
    stroke("red")*/
    //circle(nose_x,nose_y,20)
    image(clownimg,nose_x-10,nose_y-10,20,20)
}
function Takesnapshot(){
    save("my_picture.png")
}