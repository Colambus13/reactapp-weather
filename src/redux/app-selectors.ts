import { AppStateType } from "./redux-store";

export const getVisuallyImpaired = (state: AppStateType) => {
	return state.app.isVisuallyImpaired;
}