import { InferActionsTypes, BaseThunkType } from "../redux-store";
import { request as requestWeather, RequestMethods } from "../../api/weather-api";
import { WeatherType, WeatherErrorType, isWeatherType } from "../../types/types";

let initialState = {
    weather: null as WeatherType | null,
    isInitialized: false
};

const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SEARCH_WEATHER_START':
            return {
                ...state,
                isInitialized: true
            }
        case 'SEARCH_WEATHER_SUCCESS':
            return {
                ...state,
                weather: action.weatherData,
                isInitialized: false
            }
        case 'SEARCH_WEATHER_FAILURE':
            return {
                ...state,
                isInitialized: false
            }
        default:
            return state;
    }
}

export const actions = {
    searchWeatherStart: () => ({ type: 'SEARCH_WEATHER_START' } as const),
    searchWeatherSuccess: (weatherData: WeatherType) => ({ type: 'SEARCH_WEATHER_SUCCESS', weatherData } as const),
    searchWeatherFailure: (err: object) => ({ type: 'SEARCH_WEATHER_FAILURE', err, error: true } as const),
}

export const searchWeather = (value: string): ThunkType => (dispatch) => {
    dispatch(actions.searchWeatherStart());

    requestWeather(
        RequestMethods.GET, 
        'https://api.openweathermap.org/data/2.5/weather', 
        { q: value, units: 'metric', appid: process.env.REACT_APP_WEATHER_API_KEY }
    )
        .then((data: WeatherType | WeatherErrorType) => {
            if (!isWeatherType(data)) {
                throw new Error(data.message);
            }
            dispatch(actions.searchWeatherSuccess(data));
        })
        .catch((err: object) => {
            dispatch(actions.searchWeatherFailure(err));
        });
}

export default weatherReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>