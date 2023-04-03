import { combineReducers } from 'redux';
import data, { IGraphQlState } from './graphql/index.reducer';

export interface StateNetwork {
	data: IGraphQlState;
}

export interface Action<P = any> {
	type: string;
	payload?: P;
}

export interface ExtraActionInfo {
	sagas: boolean | undefined;
	request?: boolean | undefined;
}

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
	data,
});
export default rootReducer;
