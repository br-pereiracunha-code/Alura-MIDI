//Ppm...............................
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#son__tecla_pom');
    }
    contador++;
}