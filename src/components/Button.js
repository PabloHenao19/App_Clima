// Importa React
import React from 'react';

// Define un componente funcional 'Button' que recibe 'onClick' como prop
function Button({ onClick }) {
  return <button onClick={onClick}>Obtener Clima</button>;
}

// Exporta el componente 'Button'
export default Button;
