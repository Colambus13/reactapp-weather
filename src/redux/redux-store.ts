import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import weatherReducer from "./weather-reducer";

let rootReducer = combineReducers({
    weatherPage: weatherReducer
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;