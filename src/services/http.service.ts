/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse, } from 'axios';
import { ICredentials, } from '../interfaces/auth';
import { generateCacheKey, } from '../helpers/cache.key';
import { cacheService, } from './cache.service';

export class HttpService {
	static async sendRequest(payload: ICredentials): Promise<AxiosResponse<any, any> | void> {
		const cacheKey = generateCacheKey();

		const cachedData = await cacheService.get(cacheKey);
		if (cachedData) {
			console.log('Data retrieved from cache');
			return cachedData;
		}
			
		const response = await axios.post('https://trending.bid', payload);
		if(response.headers) {
			await cacheService.set(cacheKey, response.headers, 3600);
		}

		return response
	}
}