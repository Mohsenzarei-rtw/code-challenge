import HttpService from '../base';

class GraphQlServiceProvider extends HttpService {
	constructor() {
		super({ suffix: 'graphql' });
	}

	public getDataWithQuery(data: Object) {
		return this.httpService.post('', data);
	}
}

const GraphQlService = new GraphQlServiceProvider();

export default GraphQlService;
