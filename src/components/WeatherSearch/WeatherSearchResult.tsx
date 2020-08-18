import React from 'react';
import { useSelector } from 'react-redux';
import { getWeatherData } from '../../redux/selectors';
import WeatherIcon from './WeatherIcon';
import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';

import './WeatherSearchResult.css';

type PropsType = {
    weather: any | null
};

export const WeatherSearchResult: React.FC<PropsType> = (props) => {
    const weather = useSelector(getWeatherData);

    if (!weather) {
        return <></>;
    }

    return (
        <div className="weather-wrapper">
            <div className="weather-container">
                <div className="weather-main">
                    <h5>{weather.name}</h5>
                    <div style={{ display: 'flex' }}>
                        <WeatherIcon code={weather.weather.id} big />
                        <span>
                            {weather.main.temp}
                            <sup>&deg;</sup>
                        </span>
                    </div>
                    <h6>{weather.weather.description}</h6>
                </div>

                <div className="weather-additional">
                    <div className="weather-feels-like">
                        Feels like {weather.main.feels_like}
                        <sup>&deg;</sup>
                    </div>
                    <div className="weather-highlow-container">
                        <div className="weather-degree">
                            <HighIcon />
                            {weather.main.temp_max}
                            <sup>&deg;</sup>
                        </div>
                        <div className="weather-degree">
                            <LowIcon />
                            {weather.main.temp_min}
                            <sup>&deg;</sup>
                        </div>
                    </div>
                    <div className="weather-info-row">
                        <div>
                            <HumidityIcon /> Humidity
                        </div>
                        <span>{weather.main.humidity}%</span>
                    </div>
                    <div className="weather-info-row">
                        <div>
                            <WindIcon /> Wind
                        </div>
                        <span>{weather.wind.speed} kph</span>
                    </div>
                    <div className="weather-info-row">
                        <div>
                            <PressureIcon /> Pressure
                        </div>
                        <span>{weather.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};