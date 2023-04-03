// Utilities
import axios from 'axios';
import type { AxiosInstance } from 'axios';

interface Config {
	suffix?: string;
	baseURL?: string;
}

/**
 * A HTTP service which created by Axios instance creator
 *
 * @abstract
 */
abstract class BaseAPI {
	protected httpService: AxiosInstance;
	protected constructor({ suffix, baseURL = 'https://rickandmortyapi.com' }: Config) {
		// create a new instance of the Axios with custom config.
		this.httpService = axios.create({
			baseURL: `${baseURL}/${suffix && suffix}`,
			timeout: 60000,
		});

		// Interceptors
	}

	getErrorText(errorCode: number): string {
		return `${errorCode}`;
	}
}

export default BaseAPI;
