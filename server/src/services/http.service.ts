/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import {Response,} from 'express';
import { Errors, Exception, handlerError, } from '../utils/index';

export class HttpService {
	static async sendRequest(payload: any) {
		try {
			const response = await axios.post('https://trending.bid', payload);
			if (response.headers && response.headers['set-cookie'] && response.headers['set-cookie'].length > 0) {
				const data = response.headers['set-cookie'];
				console.log(data)
				return data
			} else {
				throw new Exception(Errors.SessionNotFound, 'Set-Cookie header missing');
			}
		} catch(err) {
			return handlerError('Failed to send request', err as Response);
		}
	}
}