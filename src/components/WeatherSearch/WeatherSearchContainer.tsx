import React from 'react';
import { AppStateType } from '../../redux/redux-store';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchWeather } from '../../redux/weather-reducer';
import { WeatherSearchForm } from './WeatherSearchForm';
import { WeatherSearchResult } from './WeatherSearchResult';

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
    searchWeather: (value: string) => void
};

const WeatherSearchContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <>
            <WeatherSearchForm {...props} />
            <WeatherSearchResult weather={props.weather} />
        </>
    );
};

let mapStateToProps = (state: AppStateType) => {
    return ({
        weather: state.weatherPage.weather
    });
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {searchWeather}),
    withRouter
)(WeatherSearchContainer);