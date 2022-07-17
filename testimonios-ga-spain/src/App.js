import "./App.css";
import { Testimonio } from "./componentes/Testimonio";
import React from "react";

function App() {
  //renderizando componentes
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestro alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio={
            <React.Fragment>
              Da miedo cambiar de carrera. Solo gané la confianza de que podía
              programar trabajando a través de los cientos de horas de lecciones
              gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de
              seis cifras como ingeniero de software.{" "}
              <span className="bold">freeCodeCamp cambió mi vida.</span>
            </React.Fragment>
          }
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio={
            <React.Fragment>
              <span className="bold">
                freeCodeCamp fue la puerta de entrada a mi carrera
              </span>{" "}
              como desarrollador de software. El plan de estudios bien
              estructurado llevó mis conocimientos de programación de un nivel
              de principiante total a un nivel muy seguro. Era todo lo que
              necesitaba para conseguir mi primer trabajo de desarrollador en
              una empresa increíble.
            </React.Fragment>
          }
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio={
            <React.Fragment>
              Siempre he tenido problemas para aprender JavaScript.He tomado
              muchos cursos, pero el curso de{" "}
              <span className="bold"> freeCodeCamp me dio las habilidades</span>{" "}
              y la confianza que necesitaba para conseguir el trabajo de mis
              sueños como ingeniero de software en Spotify.
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}

export default App;
