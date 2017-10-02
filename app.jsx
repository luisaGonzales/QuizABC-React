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
                  respondido: false,
                  preguntaActual: 0,
                  respuestas: [],
                  correctas: 0,
                  revisar: false
            }
      }
      mostrarOpciones(opciones) {
            return Object.keys(opciones).map((alternativa, index) => {
                  let opcion = opciones[alternativa];
                  return (
                        <div className="text-center">
                              <div className={this.state.respuestas[this.state.preguntaActual] == opcion ? 'col-lg-4 col-md-4 col-sm-4 col-xs-12 seleccionado' : 'col-lg-4 col-md-4 col-sm-4 col-xs-12'}>
                                    <button onClick={(e) => this.responder(e.currentTarget, opcion)} className='btn btn-block btn-abc text-center' key={index}><span className='abc pull-left'>{alternativa}</span>{opcion}<span className="seleccion"></span></button>
                              </div>
                        </div>
                  );
            })
      }
      mostrarPreguntas() {
            return (
            <div>
                  <h1 className="text-center titulo"> {preguntas[this.state.preguntaActual].pregunta} </h1>
                  <div className="opciones row">
                        {this.mostrarOpciones(preguntas[this.state.preguntaActual].opciones)}
                  </div>
            </div>
            );
      }
      responder(evento, respuesta) {
            let respuestaUsuario = this.state.respuestas;
            respuestaUsuario[this.state.preguntaActual] = respuesta;
            this.setState({
                  respuestas: respuestaUsuario
            })
            if (respuesta == preguntas[this.state.preguntaActual].correcta) {
                  this.setState({
                        correctas: this.state.correctas + 1
                  })
            }
            let t = setTimeout(()=>{
                  this.siguientePregunta();
            }, 800);
      }
      mostrarRespuestas(){
            return(
                  <div className="col-md-12 col-lg-12">
                        <h1 className="titulo">
                              {!this.state.revisar && 'Estas son tus respuestas!'}
                              {this.state.revisar && this.state.correctas + ' de' + preguntas.length + ' correctas!!'}
                        </h1>
                        {this.state.respuestas.map((usuario, indexRespuestas) => {
                              if (usuario == preguntas[indexRespuestas].correcta && this.state.revisar) {
                                    console.log(this.state.revisar)
                                    return <p className="text-success">{indexRespuestas + 1}. {preguntas[indexRespuestas].pregunta}<strong>{usuario}</strong></p>
                              } else if (this.state.revisar) {
                                    return <p className="text-danger">{indexRespuestas + 1}. {preguntas[indexRespuestas].pregunta}<strong><strike>{usuario}</strike> {preguntas[indexRespuestas].correcta}</strong></p>
                              } else {
                                    return <p>{indexRespuestas + 1}. {preguntas[indexRespuestas].pregunta}<strong>{usuario}</strong></p>;
                              }
                        })
                        }
                        <div className='text-center'>
                              {this.state.revisar && <button className='btn-lg btn-dark' onClick={() => this.reiniciar()}>Start Again</button>}
                              {!this.state.revisar && <button className='btn-lg btn-dark' onClick={() => this.revisar()}>Enviar</button>}
                        </div>
                  </div>
            );
      }
      preguntaAnterior(){
            if (this.state.preguntaActual == preguntas.length) {
                  this.setState({
                        respondido: false
                  });
            }
            this.setState({
                  preguntaActual: this.state.preguntaActual - 1
            })
      }

      siguientePregunta(){
            if (this.state.preguntaActual == preguntas.length) {
                  this.setState({
                        respondido: true
                  });
            }
            this.setState({
                  preguntaActual: this.state.preguntaActual + 1
            })
      }
      revisar() {
            this.setState({
                  revisar: true
            });
      }
      reiniciar(){
            this.setState({
                  respondido: false,
                  preguntaActual: 0,
                  respuestas: [],
                  correctas: 0,
                  revisar: false
            });
      }
      render(){
            return(
            <div>
                  <section className="container quiz text-center">
                        <div className="row text-center">
                              <div className="col-md-offset-3 col-md-6 col-md-offset-3 ">
                              {!this.state.respondido && <img src={preguntas[this.state.preguntaActual].imagen} />}
                              {this.state.respondido && <img src="img/truck.svg"/>}
                              </div>
                        </div>
                        <div className="row contenido">
                              <div className="row estado" id="progreso">
                              {!this.state.revisar &&
                                    <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                                          <div>{this.state.respuestas.length} de {preguntas.length} preguntas contestadas</div>
                                          <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuemax="100" style={{ width: this.state.respuestas.length * 20 + '%', height: '10px' }}>
                                                </div>
                                          </div>
                                    </div>
                              }     
                              </div>
                              <div className="col-md-12 col-lg-12 pregunta">
                                    {!this.state.respondido && this.mostrarPreguntas()}
                                    {this.state.respondido && this.mostrarRespuestas()}
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
                        </div>
                        {!this.state.revisar && this.state.respuestas.length != 0 &&
                        <div id="flechas" className="text-center">
                              <button id="anterior" className={this.state.respuestas.length>=this.state.preguntaActual&&this.state.preguntaActual?'btn':"btn disabled"} onClick={()=>{this.preguntaAnterior()}}>
                                    <img className="img-responsive" src="img/left.svg" />
                              </button>
                              <button id="siguiente" className={this.state.respuestas.length>this.state.preguntaActual?'btn':"btn disabled"} onClick={()=>{this.siguientePregunta()}} >
                                    <img className="img-responsive" src="img/right.svg" />
                              </button>
                        </div>
                        }
                  </section>
            </div>
            );
      }
}

ReactDOM.render( <App /> , document.getElementById("container"));