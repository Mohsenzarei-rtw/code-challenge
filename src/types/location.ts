import { IInfo } from './global';

export interface ILocation {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: string;
}

export interface ILocationResponse {
	info?: IInfo;
	results?: ILocation;
}
