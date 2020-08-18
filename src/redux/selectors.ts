import { AppStateType } from "./redux-store";

export const getWeatherData = (state: AppStateType) => {
    return state.weatherPage.weather;
}