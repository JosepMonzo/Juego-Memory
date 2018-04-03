

/*
var imagenes = new Array(16);
imagenes[0] = "/img/1-a.jpg";
imagenes[1] = "/img/1-b.jpg";
imagenes[2] = "/img/2-a.jpg";
imagenes[3] = "/img/2-b.jpg";
imagenes[4] = "/img/3-a.jpg";
imagenes[5] = "/img/3-b.jpg";
imagenes[6] = "/img/4-a.jpg";
imagenes[7] = "/img/4-b.jpg";
imagenes[8] = "/img/5-a.jpg";
imagenes[9] = "/img/5-b.jpg";
imagenes[10] = "/img/6-a.jpg";
imagenes[11] = "/img/6-b.jpg";
imagenes[12] = "/img/7-a.jpg";
imagenes[13] = "/img/7-b.jpg";
imagenes[14] = "/img/8-a.jpg";
imagenes[15] = "/img/8-b.jpg";
*/
function dibujarCanvas(){
	var canvas = document.getElementById('miCanvas');
	var ctx = canvas.getContext('2d');
}
    for (var x=0; x<=500; x=x+125){
      ctx.moveTo(x,0);
      ctx.lineTo(x,500);
    }

    for (var y=0; y<=500; y=y+125){
      ctx.moveTo(0,y);
      ctx.lineTo(500,y);
    }

    ctx.strokeStyle = "#f00";
    ctx.stroke();



