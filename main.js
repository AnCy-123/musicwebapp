song="";
songtwo="";
function preload(){
    song=loadSound("Cradle.mp3");
    songtwo=loadSound("Freak.mp3")
}
function setup(){
    canvas=createCanvas(450,250);
    canvas.position(500, 400)
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,450,400);
}
function playfreak(){
    songtwo.play();
}
function playcradles(){
    song.play();
}
function stop(){
    song.stop()
    songtwo.stop()
}