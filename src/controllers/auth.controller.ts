import { Request, Response, } from 'express';
import { AuthService, } from '../services/auth.service';
import { ICredentials, } from '../interfaces/auth';
import { ApiError, } from '../utils/error';
import { handlerError, } from '../utils/handleError';

export class AuthController {
	static async auth(req: Request, res: Response): Promise<void> {
		try {
			const { PHPSESSID, } = req.body as ICredentials;

			const authenticationResult = await AuthService.auth(PHPSESSID);
			if (authenticationResult) {
				res.status(200).json({ ok: true, message: 'Authentication successful', });
			} else {
				throw ApiError.BadRequest('Bad Request')
			}
		} catch (err) {
			return handlerError(err, res)
		}
	}
}
