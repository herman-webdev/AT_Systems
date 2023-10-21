/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
import { generateCacheKey, } from '../helpers/cache.key';
import { cacheService, } from '../services/cache.service';
import { ApiError, } from '../utils/error';

export class UserController {
	static async getBalance() {
		const cacheKey = generateCacheKey();
		const cachedData = await cacheService.get(cacheKey);

		if (cachedData) {
			const profileResponse = await axios.get('https://trending.bid/api/user/getprofile', {headers: cachedData,});
			if(profileResponse) {
				return profileResponse.data.data.balance;
			} else {
				throw ApiError.Unauthorized()
			}
		} else {
			throw new Error('Cached data is missing');
		}
	}
}

