// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Actions
import graphQlActions from '../store/graphql/index.actions';
import { StateNetwork } from 'src/store/index.reducer';
import { IGraphQlState } from 'src/store/graphql/index.reducer';

function useGraphQl() {
	const dispatch = useDispatch();
	const data = useSelector<StateNetwork, IGraphQlState>((state) => state.data);

	function getData(query: string): void {
		const action = graphQlActions.getDataWithQuery(query, { sagas: true });
		dispatch(action);
	}

	return {
		getData,
		data,
	};
}

export default useGraphQl;
