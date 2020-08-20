import { InferActionsTypes, BaseThunkType } from "../redux-store";

let initialState = {
	isVisuallyImpaired: false
};

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'TOGGLE_VISUALLY_IMPAIRED':
			return {
				...state,
				isVisuallyImpaired: !state.isVisuallyImpaired
			};
		default:
			return state;
	}
}

export const actions = {
	toggleVisuallyImpaired: () => ({ type: 'TOGGLE_VISUALLY_IMPAIRED' } as const),
}

export default appReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>