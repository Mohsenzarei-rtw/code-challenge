import { all } from 'redux-saga/effects';

/**
 * rootSaga
 * In this case, we need to merge all redux-saga sagas together to observe all dispatched actions.
 */

export default function* root(): any {
	return yield all([]);
}
