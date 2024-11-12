import { useState } from 'react'
import './Weather.css'
import { Link } from "react-router-dom"

function Weather() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchWeather = async () => {
        try {
            if (!latitude || !longitude) {
                setError('Prosím, zadejte platné souřadnice.')
                return
            }
            setIsLoading(true)
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            );

            if (!response.ok) {
                throw new Error('Nepodařilo se načíst data o počasí.')
            }

            const data = await response.json()
            setWeather(data.current_weather)
            setError(null);
        } catch (err) {
            setError('Chyba při získávání počasí: ' + err.message)
            setWeather(null)
        }
        setIsLoading(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchWeather()
    };

    return (
        <div className="app-container">
            <h1>Weather by coordinates</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>latitude:</label>
                    <input
                        type="number"
                        step="any"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        placeholder="Enter latitude"
                        required
                    />
                </div>
                <div>
                    <label>longitude:</label>
                    <input
                        type="number"
                        step="any"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        placeholder="Enter longitude"
                        required
                    />
                </div>
                <button type="submit">Show weather</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {isLoading ? (
                <p>Načítání počasí...</p>
            ) : weather && (
                <div className="weather-info">
                    <h2>Current weather</h2>
                    <p className="weather-item">Temperature: <span>{weather.temperature}°C</span></p>
                    <p className="weather-item">Rychlost větru: <span>{weather.windspeed} m/s</span></p>
                    <p className="weather-item">Wind speed: <span>{weather.wind_direction}°</span></p>
                    <p className="weather-item">Humidity: <span>{weather.humidity}%</span></p>
                    <p className="weather-item">Atmospheric pressure: <span>{weather.pressure} hPa</span></p>
                </div>
            )}
            <p><Link to="/">Back to the homepage</Link></p>
        </div>
    );
}

export default Weather;