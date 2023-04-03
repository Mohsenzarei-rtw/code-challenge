import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Action } from '../../store/index.reducer';
import qraphQlAction from './index.actions';
import * as types from './index.constants';
import GraphQlService from '../../services/endpoints/qraphQl';

function* graphQl(action: Action<string>): any {
	const query = {
		query: action.payload,
	};
	try {
		yield put(qraphQlAction.setLoading(true));
		const { data } = yield call(() => GraphQlService.getDataWithQuery(query));
		yield put(qraphQlAction.getDataWithQuery(data.data));
	} catch (error) {
		console.log(error);
	} finally {
		yield put(qraphQlAction.setLoading(false));
	}
}

export default function* networkListeners(): any {
	yield all([takeLatest(types.SAGAS_GET_DATA_WITH_QUERY, graphQl)]);
}
