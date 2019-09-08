document.addEventListener("keydown",dibujaPorFlecha);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
//Posicion inicial para dibujar
var xi = ancho/2;
var yi=xi;
var r=10;//Distancia que recorre
//Key de las flechas
var teclas ={
	LEFT:37,
	UP:38,
	RIGHT:39,
	DOWN:40
};
//Crear bordes
dibujarLinea("black",1,1,1,300);
dibujarLinea("black",1,300,300,300);
dibujarLinea("black",1,1,300,1);
dibujarLinea("black",300,1,300,300);
//console.log(lienzo);
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle=color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujaPorFlecha(evento){
	var xf=xi,yf=yi;
	var colorcito = "#000";

	switch(evento.keyCode){
		case teclas.LEFT:
			xf=xi-r;
			colorcito="red";
			break;
		case teclas.UP:
			yf=yi-r;
			colorcito="blue";
			break;
		case teclas.RIGHT:
			xf=xi+r;
			colorcito="green";
			break;
		case teclas.DOWN:
			yf=yi+r;
			colorcito="yellow";
			break;
		default:
			console.log("Otra flecha");
			break;
	}

	dibujarLinea(colorcito,xi,yi,xf,yf);
	xi=xf;
	yi=yf;
}