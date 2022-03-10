function visible() {
    document.getElementById("visible").style.display= "block"
}

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("visible").style.display= "none"
})

function Start() {
    document.getElementById("invisible").style.display= "none"
    anim()
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 50;
x = 500;
y = 500;
canvas.width = 1000;
canvas.height = 670;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
  }

  function anim() {
    requestAnimationFrame(anim);
    ctx.clearRect(0,0,canvas.width,canvas.height)
     drawBall() 
    }
    var touche = window.addEventListener('keypress', deplace);
    function deplace(e) {
        
        if (e.key == 'z') {
            console.log("en haut")
            if (y + 50 > canvas.height || y - 50 < 0){
                y=y+4
            } else {
            y=y-4}
            // alert("en haut")
        }
        if (e.key == 'q') {
            console.log("a gauche")
            if (x + 50 > canvas.width || x - 50 < 0){
                x=x+4
            } else {
            x=x-4}
            // alert("a gauche")
        }
        if (e.key == 'd') {
            console.log("a droite")
            if (x + 50 > canvas.width || x - 50 < 0){
                x=x-4
            } else {
            x=x+4}
            // alert("a droite")
        }
        if (e.key == 's') {
            console.log("en bas")
            if (y + 50 > canvas.height || y - 50 < 0){
                y=y-4
            } else {
            y=y+4}
            // alert("en bas")
        }
    }