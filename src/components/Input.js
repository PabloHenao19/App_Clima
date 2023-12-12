// Importa React
import React from 'react';

// Define un componente funcional 'Input' que recibe 'value' y 'onChange' como props
function Input({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Ingrese el nombre de la ciudad"
      value={value}
      onChange={onChange}
    />
  );
}

// Exporta el componente 'Input'
export default Input;
