window.addEventListener('load', function(){

  let peticion = new XMLHttpRequest();

  var lista = new Array();
  
  var platosArray = [];

  peticion.onload = function() {
    if (this.readyState === 4 && this.status === 200) {
  
      let platos = this.responseXML;
  
      let misplatos = platos.querySelectorAll("plato");
      let d1 = document.querySelector("#d1");
      let d2 = document.querySelector("#d2");
  
      misplatos.forEach(function(plato) {
  
        let nombre = plato.querySelector("nombre").textContent;
        let precio = plato.querySelector("precio").textContent;
        let descripcion = plato.querySelector("descripcion").textContent;
        let informacion = plato.querySelector("informacion").textContent;

        let id = plato.getAttribute('id');
  
        let d3 = document.createElement("div");
        d3.className = "col-6 fondo";
  
        let h1 = document.createElement("h2"); 
        h1.className = "text-center";
        h1.textContent = plato.querySelector("nombre").textContent;

        let p1 = document.createElement("p");
        p1.textContent = nombre;

        let p2 = document.createElement("p");
        p2.textContent = precio + " €";

        let p3 = document.createElement("p");
        p3.textContent = descripcion;
        
        let p4 = document.createElement("p");
        p4.textContent = informacion + " calorias";
  
        d1.appendChild(d3);

        d3.append(h1, p1, p2, p3, p4);
              
        //console.log(id);
      });

      
      


      var imagenes = document.querySelectorAll('.img01');

      imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {

          while (d2.firstChild) {
            d2.removeChild(d2.firstChild);
          }

          let ide = imagen.getAttribute('ide');
          console.log(ide);

          misplatos.forEach(function(plato) {

            let id = plato.getAttribute('id');

            if (id==ide) {
              let titulo = plato.querySelector("titulo").textContent;
              let video = plato.querySelector("video").textContent;
              let direccion = "Dirección: "+ plato.querySelector("direccion").textContent;
              let duracion = "Duración: "+ plato.querySelector("duracion").textContent;
              let nacionalidad = "Nacionalidad: "+ plato.querySelector("nacionalidad").textContent;
              let artistas = "Artistas: "+ plato.querySelector("artistas").textContent;
              let genero = "Género: "+ plato.querySelector("genero").textContent;
              let sinopsis = "Sinopsis: "+ plato.querySelector("sinopsis").textContent;

              let h2 = document.createElement("h2");

              let iframe1 = document.createElement("iframe");
              iframe1.setAttribute('width', '560'); // Ancho del iframe
              iframe1.setAttribute('height', '315'); // Altura del iframe
              iframe1.setAttribute('src', 'https://www.youtube.com/embed/'+video); 
              iframe1.setAttribute('frameborder', '0');
              iframe1.setAttribute('allowfullscreen', '');

              let p1 = document.createElement("p");
              let p2 = document.createElement("p");
              let p3 = document.createElement("p");
              let p4 = document.createElement("p");
              let p5 = document.createElement("p");
              let p6 = document.createElement("p");

              h2.textContent = titulo;
              p1.textContent = direccion;
              p2.textContent = duracion;
              p3.textContent = nacionalidad;
              p4.textContent = artistas;
              p5.textContent = genero;
              p6.textContent = sinopsis;

              d2.append(h2, iframe1, p1, p2, p3, p4, p5, p6);
            }

          });
          
        });
      });


      
    }


  };

  
  // Hacer la solicitud al archivo XML
  peticion.open("GET", "menu.xml", true);
  peticion.send();


});


