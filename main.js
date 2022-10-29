song1="";
song2="";
song1_status="";
song2_status="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");

}


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function draw(){
    image(video, 0, 0, 600, 500);

}

function play(){
    song1.play();
    song.setVolume(1);
    song.rate(1);
    
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX-results[0].pose.leftWrist.x;
        leftWristy-results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX +"leftWristY =" + leftWristY)

        rightWristX-results[0].pose.rightWrist.x;
        rightWristY-results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX +"rightWristY =" + rightWristY)
    }
}
