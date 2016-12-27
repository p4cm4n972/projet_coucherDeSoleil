'use strict';
window.onload = function()
{
    var canvas = document.getElementById('myCanvas');
    if (!canvas)
    {
        alert('impossible de recuperer le canvas');
        return;
    } 
    var ctx = canvas.getContext('2d');
    if(!ctx)
    {
        alert('impossible de recuperer le contexte');
        return;
    }
    var myIntervalle = setInterval(animate, 1000/30);


    //COORDONNEE SOLEIL
    var diametreSoleil = 50;
    var diametreAnneau = 70;
    var xSoleil = 700+diametreSoleil/2;
    var ySoleil = 20+diametreSoleil/2;
    var vitesseX = 3 ;
    var vitesseY = 3;


    //FONCTION ANIMATION
    function animate(){ 
    //LE CIEL
    ctx.beginPath();
    ctx.fillStyle = "rgb(119,181,254)";
    ctx.fillRect (0,0,720,250);
    ctx.closePath();
    

    //LA PLAINE VERTE
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect (0,250,720,110);
    ctx.closePath();
       
    //LE SOLEIL
    ctx.clearRect(xSoleil, ySoleil,diametreSoleil/2, 0, Math.PI*2);
     
    ctx.beginPath();
    ctx.arc(xSoleil, ySoleil, diametreSoleil/2, 0, Math.PI*2);
    ctx.fillStyle="rgb(255,255,0)";
    ctx.fill();
    ctx.closePath();

    xSoleil -= vitesseX;
    ySoleil += vitesseY;

   //ANNEAU DU SOLEIL
   /* ctx.beginPath();
    ctx.arc(xSoleil, ySoleil, diametreAnneau/2, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle="rgba(255,255,0,.5)";*/
    };
};

