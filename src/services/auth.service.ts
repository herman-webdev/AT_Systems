import { Response, } from 'express';
import { handlerError, } from '../utils/index';
import { HttpService, } from './http.service';

export class AuthService {
	static async auth(PHPSESSID: string): Promise<boolean | void> {
		try {
			const payload = {
				PHPSESSID,
			}

			const response = await HttpService.sendRequest(payload);
			if (response) {
				return true;
			} else {
				return false;
			}
		} catch(err) {
			return handlerError('Authentication failed', err as Response)
		}
	}
}