import "./App.css";
import Boton from "./componentes/Boton.jsx";
import Contador from "./componentes/Contador.jsx";
import { useState } from "react";
{
  /*import siraLogo from "./imagenes/sira-logo.png";*/
}

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className="contenedor-logo">
        <h1>sirapuig 2022</h1>
        {/* {<img className="sira-logo" src={siraLogo} alt="Logo de Sira" />} */}
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
