import React from 'react';
import { AppStateType } from '../../redux/redux-store';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchWeather } from '../../redux/reducers/weather-reducer';
import SearchForm from './SearchForm';
import Weather from './Weather';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    searchWeather: (value: string) => void
}

const WeatherContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <>
            <SearchForm searchWeather={props.searchWeather} />
            <Weather weather={props.weather} />
        </>
    );
};

let mapStateToProps = (state: AppStateType) => {
    return ({
        weather: state.weatherPage.weather
    });
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { searchWeather }),
    withRouter
)(WeatherContainer);