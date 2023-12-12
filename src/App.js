// Importa las bibliotecas y módulos necesarios de React y estilos
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// Importa los componentes personalizados
import Input from './components/Input';
import Button from './components/Button';
import WeatherDisplay from './components/WeatherDisplay';

// Define el componente principal de la aplicación
function App() {
  // Declara los estados necesarios usando el hook useState
  const [city, setCity] = useState('');        // Estado para almacenar el nombre de la ciudad ingresado por el usuario
  const [weather, setWeather] = useState(null); // Estado para almacenar los datos del clima obtenidos de la API
  const [error, setError] = useState(null);     // Estado para almacenar mensajes de error en caso de problemas
  const apiKey = '9f6d0f5e9d394026ab551302230712'; // Clave de API proporcionada por Weather API (reemplazar con tu propia clave)

  // Función asincrónica para obtener datos del clima al hacer clic en el botón
  const getWeather = async () => {
    try {
      // Realiza una solicitud a la API de Weather API usando Axios
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
      
      // Actualiza el estado 'weather' con los datos del clima obtenidos
      setWeather(response.data.current);
      
      // Limpia el estado 'error' en caso de que haya ocurrido un error previamente
      setError(null);
    } catch (err) {
      // Si hay un error, establece el estado 'weather' en null y guarda el mensaje de error
      setWeather(null);
      setError('Error al obtener datos del clima');
    }
  };

  // Retorna la estructura del componente con JSX
  return (
    <div>
      {/* Título de la aplicación */}
      <h1>Weather App</h1>

      {/* Entrada de texto para ingresar el nombre de la ciudad */}
      <Input value={city} onChange={(e) => setCity(e.target.value)} />

      {/* Botón para obtener datos del clima al hacer clic */}
      <Button onClick={getWeather}>Obtener Clima</Button>

      {/* Sección para mostrar los datos del clima si están disponibles */}
      <WeatherDisplay city={city} weather={weather} error={error} />
    </div>
  );
}

// Exporta el componente principal para su uso en otros archivos
export default App;

