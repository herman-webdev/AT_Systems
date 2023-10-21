/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import {Response,} from 'express';
import { Errors, Exception, handlerError, } from '../utils/index';
import { ICredentials, } from 'interfaces/auth';
import { generateCacheKey, } from '../helpers/cache.key';
import { cacheService, } from './cache.service';

export class HttpService {
	static async sendRequest(payload: ICredentials): Promise<string[] | void> {
		try {
			const cacheKey = generateCacheKey(payload);

			const cachedData = await cacheService.get(cacheKey);
			if (cachedData) {
				console.log('Data retrieved from cache');
				return cachedData;
			}
			
			const response = await axios.post('https://trending.bid', payload);
			if (response.headers && response.headers['set-cookie'] && response.headers['set-cookie'].length > 0) {
				const data = response.headers['set-cookie'];
				console.log(data)
				console.log('Data retrieved from the external service and cached');
				await cacheService.set(cacheKey, data, 3600);

				return data
			} else {
				throw new Exception(Errors.SessionNotFound, 'Set-Cookie header missing');
			}
		} catch(err) {
			return handlerError('Failed to send request', err as Response);
		}
	}
}