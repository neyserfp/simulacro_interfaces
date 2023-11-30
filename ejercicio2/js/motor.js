window.addEventListener('load', function(){

    let div1 = document.querySelector("#div1");
    let b1 = document.querySelector("#b1");

    solicitarElemento();

    b1.addEventListener("click", function(){
        e = prompt("que elemento desea borrar?");  
        borrarElemento(e);
    });

});

function solicitarElemento(){
    let cantidad = 0;
    let contador = 0;
    cantidad = prompt("Cuántos elementos desea crear?");    // div,p,span,imagen

    while (cantidad>contador) {
        let tipoElemento = prompt("tipo de elemento " + (contador+1)+":");
        contador++;
        crearElemento(tipoElemento);
        console.log("Elemento: "+tipoElemento);
    }

}

function crearElemento(tipo){
    if (tipo=="div" || tipo=="p" || tipo=="span" || tipo=="img"){
        let elemento1 = document.createElement(tipo);
    pintarElemento(elemento1);
    } else {
        alert("El elemento " + tipo + " no es válido");
    }   

}

function pintarElemento(elemento){
    elemento.textContent = "contenido de prueba 1";
    propiedadesCSS(elemento);
    div1.append(elemento);
}

function propiedadesCSS(e){
    e.style.color = "orange";
    e.style.backgroundColor = "black";
}

function borrarElemento(etiqueta){
    etiqueta = document.querySelectorAll(etiqueta);
    console.log(etiqueta);
    etiqueta.forEach(el => el.parentNode.removeChild(el));
}