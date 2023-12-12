// Importa React
import React from 'react';

// Define un componente funcional 'WeatherDisplay' que recibe 'city', 'weather' y 'error' como props
function WeatherDisplay({ city, weather, error }) {
  return (
    <div>
      {/* Muestra los datos del clima si están disponibles */}
      {weather && (
        <div>
          <h2>Clima en {city}</h2>
          <p>Temperatura: {weather.temp_c}°C</p>
          <p>Condición: {weather.condition.text}</p>
        </div>
      )}

      {/* Muestra el mensaje de error si ocurrió algún problema */}
      {error && <p>{error}</p>}
    </div>
  );
}

// Exporta el componente 'WeatherDisplay'
export default WeatherDisplay;
