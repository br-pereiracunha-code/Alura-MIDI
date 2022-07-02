//Ppm...............................
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//para
for(let contador = 0; contador < listaDeTeclas.length; contador++)
{

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //Template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
}