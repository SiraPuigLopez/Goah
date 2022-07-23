import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css";
import Tarea from "./Tarea.jsx";

function ListaDeTareas() {
  //estado inicial de tareas que inicialmente sera un array vacio
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    console.log("tarea agrgada");
    console.log(tarea);
  };

  return (
    //esto es un fragmento cuando no necesitamos un contenedor principal
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea texto={tarea.texto} completada={tarea.completada} />
        ))}
      </div>
    </>
  );
}
export default ListaDeTareas;
