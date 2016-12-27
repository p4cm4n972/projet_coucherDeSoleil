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


    //COORDONNEE DEPART SOLEIL
    var diametreSoleil = 50;
    var diametreAnneau = 70;
    var xSoleil = 700+diametreSoleil/2;
    var ySoleil = 20+diametreSoleil/2;
    var vitesseX = 2 ;
    var vitesseY = 2;
    var cielRgb0 = 119;
    var cielRgb1 = 181;
    var cielRgb2 = 254;
    var croissance = 1;


    //FONCTION ANIMATION
    function animate(){ 
    //LE CIEL
    ctx.beginPath();
    ctx.fillStyle = "rgb(" + cielRgb0 +"," + cielRgb1 + "," + cielRgb2 +")";
    ctx.fillRect (0,0,720,300);
    ctx.closePath();
    

    //LA PLAINE VERTE
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect (0,300,720,60);
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
    diametreSoleil += croissance;
    cielRgb0 += 1;
    
    if(ySoleil+diametreSoleil/2 ==300 || xSoleil+diametreSoleil/2 == 300){
        vitesseX = 0;
        vitesseY = 0;
        croissance = 0;

    };
    };
};

