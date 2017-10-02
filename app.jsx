"use strict";

let preguntas = [
      {
            pregunta: `¿Cuál es la aerolínea más antigua del mundo?`,
            opciones: {
                  A: "Avianca", 
                  B: "KLM", 
                  C: "Qantas"
            },
            correcta: "KLM",
            imagen: "img/plane.svg"
      },
      {
            pregunta: `¿Cuál es el puerto más grande del mundo?`,
            opciones: {
                  A: "Puerto de Singapur", 
                  B: "Puerto de Rotterdam", 
                  C: "Puerto de Shangai"
            },
            correcta: "Puerto de Shangai",
            imagen: "img/ship.svg"
      },
      {
            pregunta: `¿Cuál es la distancia más larga en bicicleta hacia atrás?`,
            opciones: {
                  A: "89.30 km", 
                  B: "675.10 km", 
                  C: "337.60 km"
            },
            correcta: "337.60 km",
            imagen: "img/bycicle.svg"
      },
      {
            pregunta: `¿Cuál es la velocidad más alta alcanzada nunca por un autobús escolar?`,
            opciones: {
                  A: "590 km/h", 
                  B: "320 km/h", 
                  C: "245 km/h"
            },
            correcta: "590 km/h",
            imagen: "img/bus.svg"
      },
      {
            pregunta: `¿Cuál es el viaje más largo con un tanque de gas?`,
            opciones: {
                  A: "2,617 km", 
                  B: "3,568 km", 
                  C: "1,732 km"
            },
            correcta: "2,617 km",
            imagen: "img/car.svg"
      }


]



class App extends React.Component {

}



ReactDOM.render( <App /> , document.getElementById("container"));