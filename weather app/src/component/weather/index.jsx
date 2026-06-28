import { useEffect } from "react";
import { useState } from "react"
import Search from "../search";



export default function Weather() {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(city) {
        if (!city.trim()) return;

        setLoading(true);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error("City not found");
            }

            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error(error);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    }


    function handleSearch() {
        fetchWeatherData(search);
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }

    useEffect(() => {
        fetchWeatherData("Islamabad");
    }, []);

    const {
        name,
        sys,
        main,
        wind,
        weather,
    } = weatherData || {};


    return (
        <div>
            <Search search={search}
                setSearch={setSearch}
                handleSearch={handleSearch} />

            {loading ? (
                <p>Loading...</p>
            ) : weatherData ? (
                <>
                    <h2>
                        {name}, {sys.country}
                    </h2>

                    <p>{getCurrentDate()}</p>

                    <h1>{main.temp}°C</h1>

                    <p>{weather[0].description}</p>

                    <p>Wind Speed: {wind.speed} m/s</p>

                    <p>Humidity: {main.humidity}%</p>
                </>
            ) : (
                <p>No weather data available.</p>
            )}

        </div>
    )
}