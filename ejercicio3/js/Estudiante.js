class Estudiante{
    constructor(nombre, edad, calificaciones, detalles){
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = calificaciones;
        this.detalles = detalles;
    }

    mostrarInformacion1 = function(){
        console.log("Nombre: "+this.nombre);
        console.log("Edad: "+this.edad);
        console.log("Calificaciones: "+this.calificaciones);
        console.log();
    }

    verPromedio = function(){
        let promedio = 0;
        let matematica = this.calificaciones["matematicas"];
        let historia = this.calificaciones["historia"];
        let ciencias = this.calificaciones["ciencias"];

        promedio = (matematica+historia+ciencias)/3;
        return promedio;
    }

    verCalificciones = function(){
        console.log("Matemáticas: "+this.calificaciones["matematicas"]);
        console.log("Historia: "+this.calificaciones["historia"]);
        console.log("Ciencias: "+this.calificaciones["ciencias"]);
    }



    verCoches = function(){
        let div = document.createElement("div");
        let imagen = document.createElement("img");
        imagen.src = "./img/" + this.imagen;
        let marca = document.createElement("p");
        marca.innerText = "Marca: " + this.marca;
        let modelo = document.createElement("p");
        modelo.innerText = "modelo: " + this.modelo;
        let kilometros = document.createElement("p");
        kilometros.innerText = "kilometros: " + this.kilometros;
        let anyo = document.createElement("p");
        anyo.innerText = "Año: " + this.anyo;
        let precio = document.createElement("p");
        precio.innerText = "precio: " + this.precio;
        let motor = document.createElement("p");
        motor.innerText = "motor: " + this.motor;
        div.append(imagen, marca, modelo, kilometros, anyo, precio, motor);
        return div;
    }
}