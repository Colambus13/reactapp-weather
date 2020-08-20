import React from 'react';
import WeatherIcon from './WeatherIcon';
import { Typography, CssBaseline, LinearProgress } from '@material-ui/core';
import { ReactComponent as HighIcon } from '../../assets/images/high-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/images/humidity-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/images/low-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/images/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/images/wind-icon.svg';
import { WeatherType } from '../../types/types';

type PropsType = {
    weather: WeatherType | null,
    isInitialized: boolean
}

const Weather: React.FC<PropsType> = ({weather, isInitialized}) => {
    if (isInitialized) {
        return <LinearProgress />
    }
    
    return !weather ? <></> : (
        <div className="weather-wrapper">
            <CssBaseline />
            <div className="weather-container">
                <div className="weather-main">
                    <Typography variant="h6" className='weather-city-name'>{weather.name}</Typography>
                    <div style={{ display: 'flex' }}>
                        <WeatherIcon code={weather.weather[0].id} big />
                        <span>
                            {weather.main.temp.toFixed(0)}
                            <sup>&deg;</sup>
                        </span>
                    </div>
                    <Typography variant="h6" className='weather-desc'>{weather.weather[0].description}</Typography>
                </div>

                <div className="weather-additional">
                    <Typography variant="h5" className="weather-feels-like">Feels like {weather.main.feels_like.toFixed(1)}<sup>&deg;</sup></Typography>
                    <div className="weather-highlow-container">
                        <div className="weather-degree">
                            <HighIcon />
                            {weather.main.temp_max.toFixed(0)}
                            <sup>&deg;</sup>
                        </div>
                        <div className="weather-degree">
                            <LowIcon />
                            {weather.main.temp_min.toFixed(0)}
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

export default Weather;