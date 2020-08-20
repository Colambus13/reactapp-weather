import { InferActionsTypes, BaseThunkType } from "../redux-store";
import { request as requestWeather, RequestMethods } from "../../api/weather-api";
import { WeatherType } from "../../types/types";

let initialState = {
    weather: null as WeatherType | null
};

const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SEARCH_WEATHER_SUCCESS':
            return {
                ...state,
                weather: action.weatherData
            }
        case 'SEARCH_WEATHER_FAILURE':
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

    requestWeather(RequestMethods.GET, 'https://run.mocky.io/v3/3b956837-a443-4b7c-9212-1dbae7ba760f', { value })
        .then((data: WeatherType) => {
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