var fotos = 20, posicion = 0;
function foto(sentido=1,forzar=-1){
	posicion+=sentido;
	if(posicion>=fotos) posicion = 0;
	if(posicion<0) posicion = fotos - 1;
	if(forzar!=-1) posicion = forzar;
	document.querySelector(".contenedor").style.transform = `translateX(-${5*posicion}%)`;
}
document.addEventListener("DOMContentLoaded",function(){
	document.querySelector("#izquierda").addEventListener("click",function(){
		foto(-1);
	})
	document.querySelector("#derecha").addEventListener("click",function(){
		foto();
	})
})