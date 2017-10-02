"use strict";

let preguntas = [{
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
];

class App extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  completado: false,
                  preguntaActual: 0,
                  respuestas: [],
                  correctas: 0,
                  revisar: false
            }
      }
      render(){
            return(
            <div>
                  <section className="container quiz text-center">
                        <div className="row text-center">
                              <div className="col-md-offset-3 col-md-6 col-md-offset-3 ">
                              {!this.state.completado && <img src={preguntas[this.state.preguntaActual].imagen} />}
                              {this.state.completado && <img src="img/truck.svg"/>}
                              </div>
                        </div>
                        <div className="row contenido">
                              <div className="row estado">
                              {!this.state.revisar &&
                                    <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                                          <div>{this.state.respuestas.length} de {preguntas.length} preguntas contestadas</div>
                                          <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuemax="100" style={{ width: this.state.respuestas.length * 20 + '%', height: '5px' }}>
                                                </div>
                                          </div>
                                    </div>
                              }     
                              </div>
                              <div className="col-md-12 col-lg-12 pregunta">
                                    
                              </div>
                              <div className="row">
                                    <div className="col-md-offset-3 col-md-6 ">
                                          <span className="fa-stack fa-2x">
                                                <i className="fa fa-circle fa-stack-2x fa-inverse fa-2x"></i>
                                                <i className="fa fa-twitter fa-stack-1x"></i>
                                          </span>
                                          <span className="fa-stack fa-2x">
                                                <i className="fa fa-circle fa-stack-2x fa-inverse fa-2x"></i>
                                                <i className="fa fa-facebook fa-stack-1x"></i>
                                          </span>
                                          <span className="fa-stack fa-2x">
                                                <i className="fa fa-circle fa-stack-2x fa-inverse fa-2x"></i>
                                                <i className="fa fa-google-plus fa-stack-1x"></i>
                                          </span>
                                    </div>
                              </div>
                        </div>
                        {!this.state.revisar && this.state.respuestas.length != 0 &&
                        <div id="flechas" className="text-center">
                              <button id="anterior" className={this.state.respuestas.length>=this.state.preguntaActual&&this.state.preguntaActual?'btn':"btn disabled"}>
                                    <img className="img-responsive" src="img/left.svg" />
                              </button>
                              <button id="siguiente" className={this.state.respuestas.length>this.state.contar?'btn':"btn disabled"}>
                              <img className="img-responsive" src="img/right.svg" />
                              </button>
                        </div>
                        }
                  </section>
            </div>
            );
      }
}



ReactDOM.render( < App / > , document.getElementById("container"));