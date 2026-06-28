import { useEffect, useState } from "react";
import Search from "../search";

const API_KEY = import.meta.env.VITE_API_KEY;
const DEFAULT_CITY = "Islamabad";

export default function Weather() {

    const [search, setSearch] = useState(DEFAULT_CITY);
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    async function fetchWeatherData(city) {
        if (!city.trim()) return;
        if (!API_KEY) {
            const message = "Missing VITE_API_KEY in .env. Restart the dev server after adding it.";
            console.error(message);
            setErrorMessage(message);
            setLoading(false);
            return;
        }

        setLoading(true);
        setErrorMessage("");
        console.log("Weather API call started for city:", city);

        try {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
            console.log(
                "Weather API request URL:",
                weatherUrl.replace(API_KEY, "API_KEY_HIDDEN")
            );

            const response = await fetch(
                weatherUrl
            );
            console.log("Weather API response status:", response.status, response.statusText);

            const data = await response.json();
            console.log("Weather API response data:", data);

            if (!response.ok) {
                throw new Error(data?.message || "Unable to fetch weather data");
            }

            setWeatherData(data);
        } catch (error) {
            console.error("Weather API call failed:", error);
            setErrorMessage(error.message);
            setWeatherData(null);
        } finally {
            console.log("Weather API call finished for city:", city);
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
        fetchWeatherData(DEFAULT_CITY);
    }, []);

    const {
        name,
        sys,
        main,
        wind,
        weather,
    } = weatherData || {};


    return (
        <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <section className="weather-card w-full rounded-lg border border-white/10 bg-white/[0.04] p-5 text-center shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-white/60">
                    Weather Forecast
                </p>
                <h1 className="text-4xl font-black leading-tight text-[#10B981] sm:text-5xl lg:text-6xl">
                    Check Live Weather
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                    Search any city to see current temperature, humidity, and wind speed.
                </p>

                <div className="mt-8">
                    <Search
                        search={search}
                        setSearch={setSearch}
                        handleSearch={handleSearch}
                    />
                </div>

                {loading ? (
                    <p className="mt-10 text-2xl font-bold text-[#10B981]">Loading...</p>
                ) : weatherData ? (
                    <div className="mx-auto mt-10 grid max-w-5xl gap-5 text-left lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-lg border border-white/10 bg-[#131619]/80 p-5 sm:p-7">
                            <h2 className="text-3xl font-black text-[#10B981] sm:text-4xl">
                                {name}, {sys.country}
                            </h2>

                            <p className="mt-2 text-white/65">{getCurrentDate()}</p>

                            <h3 className="mt-8 text-6xl font-black leading-none text-[#FFFFFF] sm:text-7xl lg:text-8xl">
                                {Math.round(main.temp)}°C
                            </h3>

                            <p className="mt-4 text-2xl font-bold capitalize text-white/85">
                                {weather[0].description}
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            <div className="rounded-lg border border-white/10 bg-[#131619]/80 p-5">
                                <p className="text-sm font-bold uppercase tracking-wide text-white/60">
                                    Wind Speed
                                </p>
                                <p className="mt-2 text-3xl font-black text-[#FFFFFF]">
                                    {wind.speed} m/s
                                </p>
                            </div>

                            <div className="rounded-lg border border-white/10 bg-[#131619]/80 p-5">
                                <p className="text-sm font-bold uppercase tracking-wide text-white/60">
                                    Humidity
                                </p>
                                <p className="mt-2 text-3xl font-black text-[#FFFFFF]">
                                    {main.humidity}%
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-white/10 bg-[#131619]/80 p-5">
                        <p className="text-xl font-bold text-[#FFFFFF]">No weather data available.</p>
                        {errorMessage ? (
                            <p className="mt-3 text-sm leading-6 text-white/65">
                                Error: {errorMessage}
                            </p>
                        ) : null}
                    </div>
                )}

            </section>
        </main>
    )
}
