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
var x = 500;
var y = 500;
var v = 4;
var z = 1;
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
//   window.addEventListener('keydown', speed);
//   function speed(e) {
//     z++
//       console.log(e)
//       if (e.code == 'Space' && z == 2) {
//         v = 10
//         alert("vitesse augmenté")              
//     } else {
//         z--
//         v = 4
//         alert("vitesse diminué")
//     }
//   }
  
  function anim() {
    requestAnimationFrame(anim);
    ctx.clearRect(0,0,canvas.width,canvas.height)
     drawBall() 
    }
    window.addEventListener('keypress', deplace);
    function deplace(e) {
        
        if (e.key == 'z') {
            console.log("en haut")
            if (y + 50 > canvas.height || y - 50 < 0){
                y=y+v
            } else {
            y=y-v}
            // alert("en haut")
        }
        if (e.key == 'q') {
            console.log("a gauche")
            if (x + 50 > canvas.width || x - 50 < 0){
                x=x+v
            } else {
            x=x-v}
            // alert("a gauche")
        }
        if (e.key == 'd') {
            console.log("a droite")
            if (x + 50 > canvas.width || x - 50 < 0){
                x=x-v
            } else {
            x=x+v}
            // alert("a droite")
        }
        if (e.key == 's') {
            console.log("en bas")
            if (y + 50 > canvas.height || y - 50 < 0){
                y=y-v
            } else {
            y=y+v}
            // alert("en bas")
        }
     
    }