function preload(){
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();

}


function draw(){
    image(video,0,0,640,480);
   
}


function take_snapshot(){
save('myFilterImage.png');
}

