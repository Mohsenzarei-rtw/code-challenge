import React from 'react';
import * as types from './index.constants';
import { mergeRight } from 'ramda';
import { Action } from 'store/index.reducer';
import { ICharacterResponse } from 'src/types/character';
import { ILocationResponse } from 'src/types/location';
import { IEpisodeResponse } from 'src/types/episode';

export interface IGraphQlState {
	loading: boolean;
	characters?: ICharacterResponse;
	locations?: ILocationResponse;
	episodes?: IEpisodeResponse;
}

export const initialState: IGraphQlState = {
	loading: false,
};

const reducer: React.Reducer<IGraphQlState, Action> = (state = initialState, action) => {
	const update = mergeRight<IGraphQlState>(state);

	switch (action.type) {
		case types.LOADING:
			return update({
				loading: action.payload,
			});
		case types.GET_DATA_WITH_QUERY:
			return update({
				...action.payload,
			});
		default:
			return state;
	}
};

export default reducer;
