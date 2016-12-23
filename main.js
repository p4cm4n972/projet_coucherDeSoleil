function draw() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    

    ctx.fillStyle = "rgb(119,181,254)";
    ctx.fillRect (0,0,720,250);
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect (0,250,720,110);
    
    var toRadians = Math.PI / 180; //CONVERTIR LES RADIANS (UNITES PAR DEFAUTS DE CANVAS) EN DEGRES
    var endAngle = 360 * toRadians;
    ctx.beginPath();
    ctx.fillStyle="rgb(255,255,0)";
    ctx.moveTo(700, 20);
    ctx.arc(700, 20, 50, 0, endAngle, false);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle="rgba(255,255,0,.5)";
    ctx.moveTo(700, 20);
    ctx.arc(700, 20, 70, 0, endAngle, false);
    ctx.fill();
    }
}
