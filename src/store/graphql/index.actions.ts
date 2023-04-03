import * as types from './index.constants';
import type { Action, ExtraActionInfo } from '../../store/index.reducer';

class Actions {
	public setLoading(status: boolean): Action<boolean> {
		return {
			type: types.LOADING,
			payload: status,
		};
	}

	public getDataWithQuery(data: string, options?: ExtraActionInfo): Action<string> {
		return {
			type: options?.sagas ? types.SAGAS_GET_DATA_WITH_QUERY : types.GET_DATA_WITH_QUERY,
			payload: data,
		};
	}
}

const qraphQlAction = new Actions();

export default qraphQlAction;
