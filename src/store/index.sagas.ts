import { all, fork } from 'redux-saga/effects';
import GraphQlSaga from './graphql/index.saga';

/**
 * rootSaga
 * In this case, we need to merge all redux-saga sagas together to observe all dispatched actions.
 */

export default function* root(): any {
	return yield all([fork(GraphQlSaga)]);
}
