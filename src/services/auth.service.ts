import { ApiError, } from '../utils/error';
import { HttpService, } from './http.service';

export class AuthService {
	static async auth(PHPSESSID: string): Promise<boolean | void> {
		const payload = {
			PHPSESSID,
		}

		const response = await HttpService.sendRequest(payload);
		if (response) {
			return true;
		} else {
			throw ApiError.BadRequest('Bad request')
		}
	}
}