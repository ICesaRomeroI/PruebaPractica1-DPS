import React, { useState } from "react";

export const Header = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [curso, setCurso] = useState('1');
    const [cursoTexto, setCursoTexto] = useState('Ingles');
    const [meses, setMeses] = useState('1');
    const [mesesTexto, setMesesTexto] = useState('1 mes');
    const [mostrarValores, setMostrarValores] = useState(false);
    const [descuento, setDescuento] = useState(0);
    const [total, setTotal] = useState(0);

  const handleChange = (event) => {
    const { name, value, options } = event.target;
    if (name === "nombre") {
      setNombre(value);
    } else if (name === "apellido") {
      setApellido(value);
    } else if (name === "curso") {
      setCurso(value);
      // Obtener el texto seleccionado del elemento select
      const selectedText = options[options.selectedIndex].text;
      setCursoTexto(selectedText);
    } else if (name === "meses") {
      setMeses(value);
      // Obtener el texto seleccionado del elemento select
      const selectedText = options[options.selectedIndex].text;
      setMesesTexto(selectedText);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let descuentoCalculado = 0;

    switch (meses) {
      case "2":
        descuentoCalculado = 0.1; // 10% de descuento
    
        break;
      case "3":
        descuentoCalculado = 0.2; // 20% de descuento

        break;
      case "4":
        descuentoCalculado = 0.3; // 30% de descuento

        break;
      case "5":
        descuentoCalculado = 0.4; // 40% de descuento

        break;
      case "6":
        descuentoCalculado = 0.5; // 50% de descuento

        break;
      default:
        descuentoCalculado = 0; // Sin descuento por defecto
        
        break;
    }

    setDescuento(descuentoCalculado);
    setMostrarValores(true);

    const totalCalculado = 25 + (25 * descuentoCalculado); // Calculamos el total sumando el descuento a 25
    setDescuento(descuentoCalculado);
    setTotal(totalCalculado);
    setMostrarValores(true);  
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
      
        {mostrarValores && (
        <div id="sep">
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Curso seleccionado: {cursoTexto}</p>
          <p>Meses seleccionados: {mesesTexto}</p>
          <p>Descuento aplicado: {descuento * 100}%</p>
          <p>Total a Pagar: ${total}</p>
        </div>
      )}
    </div>
      )}
    </div>
  );
};

export default Header;
