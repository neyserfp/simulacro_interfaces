window.addEventListener("load", function(){

    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = continuar;
    peticion.open("GET", "estudiantes.json");
    peticion.send();

    function continuar() {
        if (peticion.readyState == 4) {
            if (peticion.status == 200) {

                let estudiantes = JSON.parse(peticion.responseText);

                console.log(estudiantes);
                estudiantes.forEach(estudiante => {
                    let cadaEstudiante = new Estudiante(estudiante.nombre, estudiante.edad, estudiante.calificaciones);
                    mostrarInformacion(cadaEstudiante);
                    calcularPromedio(cadaEstudiante);

                    console.log("Pro Fun: "+cadaEstudiante.verPromedio());
                    console.log("------------------------");

                });

                encontrarMejorEstudiante(estudiantes);
                let estudiante  = 



                nom = prompt("Indicar nombre de estudiante");
                estudiantes.forEach(estudiante => {
                    let cadaEstudiante = new Estudiante(estudiante.nombre, estudiante.edad, estudiante.calificaciones);
                    if (cadaEstudiante.nombre === nom){
                        actualizarInformacion(estudiante);
                    }
                });

                

            }
        }
    }

    function mostrarInformacion(holaS){
        console.log("Nombre: "+holaS.nombre);
        console.log("Edad: "+hola.edad);
        let calificaciones = hola.calificaciones;
        console.log("Matemáticas: "+calificaciones["matematicas"]);
        console.log("Historia: "+calificaciones["historia"]);
        console.log("Ciencias: "+calificaciones["ciencias"]);
    }

    function calcularPromedio(estudiante){
        let calificaciones = estudiante.calificaciones;
        let promedio = 0;

        let matematicas = calificaciones["matematicas"];
        let historia = calificaciones["historia"];
        let ciencias = calificaciones["ciencias"];
        
        promedio = (matematicas+historia+ciencias)/3;
        console.log("Promedio: "+promedio);

    }

    function encontrarMejorEstudiante(estudiantes){
        let mejorEstudiante;
        let mejorPromedio = 0;

        estudiantes.forEach(estudiante => {
            let cadaEstudiante = new Estudiante(estudiante.nombre, estudiante.edad, estudiante.calificaciones);
            if (cadaEstudiante.verPromedio()>mejorPromedio){
                mejorEstudiante = cadaEstudiante;
            }
        });

        console.log("Mejor Estudiante: "+mejorEstudiante.nombre);
                mejorEstudiante.verCalificciones();

    }

    function actualizarInformacion(estudiante){
        
        nombre = estudiante.nombre = "Raul";
        console.log("Información actualizada");
        mostrarInformacion(estudiante);
    }
    
});



