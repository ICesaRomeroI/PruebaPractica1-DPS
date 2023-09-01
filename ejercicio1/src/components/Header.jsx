import React, { useState } from "react";

export const Header = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [curso, setCurso] = useState('1'); // Inicializar con el valor predeterminado
  const [meses, setMeses] = useState('1'); // Inicializar con el valor predeterminado

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "nombre") {
      setNombre(value);
    } else if (name === "apellido") {
      setApellido(value);
    } else if (name === "curso") {
      setCurso(value);
    } else if (name === "meses") {
      setMeses(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre capturado:', nombre);
    console.log('Apellido capturado:', apellido);
    console.log('Curso seleccionado:', curso);
    console.log('Meses seleccionados:', meses);
    // Puedes realizar otras acciones con los valores capturados aquí.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={apellido}
            onChange={handleChange}
          />
        </label>
        <label>
          Cursos Ofertados:
          <select
            name="curso"
            value={curso}
            onChange={handleChange}
          >
            <option value="1">Ingles</option>
            <option value="2">Frances</option>
          </select>
        </label>
        <label>
          Cantidad de Meses:
          <select id="meses"
            name="meses"
            value={meses}
            onChange={handleChange}
          >
            <option value="1">1 mes</option>
            <option value="2">2 - 3 meses</option>
            <option value="3">4 - 5 meses</option>
            <option value="4">6 - 7 meses</option>
            <option value="5">8 - 9 meses</option>
            <option value="6">10 o más meses</option>
          </select>
        </label>

        <button type="submit">Capturar</button>
      </form>
    </div>
  );
}

export default Header;
