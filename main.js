canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var rover_height = 90
var rover_width = 100

var rover = "rover.png"

var images = ["1mages.jpg","2mages.jpg","3mages.jpg","4mages.jpg",]

var rover_X = 10
var rover_Y = 10
var random_number = Math.floor(Math.random()*4)
console.log(random_number);
var background = images[random_number];
function add(){

backgroundImg = new Image()
backgroundImg.onload = uploadBackground;
backgroundImg.src = background

roverImg = new Image()
roverImg.onload = uploadrover;
roverImg.src = rover
}
function uploadBackground(){
    ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverImg,rover_X,rover_Y,rover_width,rover_height)
}
window.addEventListener("keydown",myKeydown)
function myKeydown(e){
var keydown = e.keyCode
    if(keydown == '38'){
    up();
    console.log("up")
    };
    if(keydown == '40'){
    down();
    console.log("down")
    };
    if(keydown == '37'){
    left();
    console.log("left")
    };
    if(keydown == '39'){
    right();
    console.log("right")
    };};
    function up(){
    if(rover_Y >= 0){
    rover_Y = rover_Y - 10;
    uploadBackground();
    uploadrover();
    }
    }
    function down(){
    if(rover_Y < 500){
    rover_Y = rover_Y + 10;
    uploadBackground();
    uploadrover();
    }}
    function left(){
    if(rover_X >= 0){
    rover_X = rover_X - 10;
    uploadBackground();
    uploadrover();
       }        
    }
    function right(){
    if(rover_X < 700){
    rover_X = rover_X + 10;
    uploadBackground();
    uploadrover();
            }
        
    }