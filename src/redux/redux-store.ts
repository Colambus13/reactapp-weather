import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import weatherReducer from "./reducers/weather-reducer";
import appReducer from "./reducers/app-reducers";

let rootReducer = combineReducers({
    weatherPage: weatherReducer,
    app: appReducer
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type BaseThunkType<A extends Action = Action, R = void> = ThunkAction<R, AppStateType, unknown, A>;

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;