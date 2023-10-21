import { ICredentials, } from 'interfaces/auth';

export function generateCacheKey(payload: ICredentials) {
	return `authData:${payload.PHPSESSID}`;
};
