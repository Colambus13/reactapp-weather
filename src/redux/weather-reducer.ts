import { InferActionsTypes, BaseThunkType } from "./redux-store";
//import { FormAction } from "redux-form/lib/actions";
import { request, RequestMethods } from "../api";

let initialState = {
    weather: null as object | null
};

const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SEARCH_WEATHER_SUCCESS':
            console.log(action.weatherData);
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
    searchWeatherStart: () => ({type: 'SEARCH_WEATHER_START'} as const), // ????
    searchWeatherSuccess: (weatherData: object) => ({type: 'SEARCH_WEATHER_SUCCESS', weatherData} as const),
    searchWeatherFailure: (err: object) => ({type: 'SEARCH_WEATHER_FAILURE', err, error: true} as const),
}

export const searchWeather = (value: string): ThunkType => async (dispatch: any) => {
    dispatch(actions.searchWeatherStart());
    try {
        let response = await request(RequestMethods.GET, 'https://run.mocky.io/v3/3b956837-a443-4b7c-9212-1dbae7ba760f', {value});
        dispatch(actions.searchWeatherSuccess(response));
    } catch(err) {
        dispatch(actions.searchWeatherFailure(err));
    }
}

export default weatherReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>