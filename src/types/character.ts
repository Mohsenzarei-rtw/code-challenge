import { IInfo } from './global';

export interface IOrigin {
	name: string;
	url: string;
}

export interface ILocation {
	name: string;
	url: string;
}

export interface ICharacter {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: IOrigin;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

export interface ICharacterResponse {
	info?: IInfo;
	results?: ICharacter;
}
