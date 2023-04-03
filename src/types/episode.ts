import { IInfo } from './global';

export interface IEpisode {
	id: number;
	name: string;
	air_date: string;
	episode: string[];
	characters: string[];
	url: string;
	created: string;
}

export interface IEpisodeResponse {
	info?: IInfo;
	results?: IEpisode;
}
