import React from 'react';
import { useSelector } from 'react-redux';
import { getWeatherData } from '../../redux/selectors';
import { Button } from '@material-ui/core';
import WeatherIcon from './WeatherIcon';
import HighIcon from '../../assets/high-icon.svg';
import HumidityIcon from '../../assets/humidity-icon.svg';
import LowIcon from '../../assets/low-icon.svg';
import PressureIcon from '../../assets/pressure-icon.svg';
import WindIcon from '../../assets/wind-icon.svg';

import './WeatherSearchResult.css';

type PropsType = {
    weather: object | null
};

export const WeatherSearchResult: React.FC<PropsType> = (props) => {
    const weather = useSelector(getWeatherData);

    const onClick = () => {
        console.log(weather);
    };

    return (
        <div className="weather-wrapper">
            {/* <Button onClick={onClick}>
                Test btn
            </Button> */}
            <div className="weather-container">
                <div className="weather-main">
                    <h5>Minsk</h5>
                    <div style={{ display: 'flex' }}>
                        <WeatherIcon code={800} big />
                        <span>
                            17
                            <sup>&deg;</sup>
                        </span>
                    </div>
                    <h6>Test information...</h6>
                </div>

                <div className="weather-additional">
                    <div className="weather-feels-like">
                        Feels like 16
                        <sup>&deg;</sup>
                    </div>
                    <div className="weather-highlow-container">
                        <div className="weather-degree">
                            <img src={HighIcon} alt="high-icon"/>
                            17
                            <sup>&deg;</sup>
                        </div>
                        <div className="weather-degree">
                            <img src={LowIcon} alt="low-icon"/>
                            17
                            <sup>&deg;</sup>
                        </div>
                    </div>
                    <div className="weather-info-row">
                        <div>
                            <img src={HumidityIcon} alt="humidity-icon"/> Humidity
                        </div>
                        <span>22%</span>
                    </div>
                    <div className="weather-info-row">
                        <div>
                            <img src={WindIcon} alt="wind-icon"/> Wind
                        </div>
                        <span>3 kph</span>
                    </div>
                    <div className="weather-info-row">
                        <div>
                            <img src={PressureIcon} alt="pressure-icon"/> Pressure
                        </div>
                        <span>333 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};