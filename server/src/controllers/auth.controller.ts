import { Request, Response, } from 'express';
import { AuthService, } from '../services/auth.service';
import { ICredentials, } from '../interfaces/auth';
import { Errors, Exception, handlerError, } from '../utils/index';

/* eslint-disable */
export class AuthController {
	static async auth(req: Request, res: Response): Promise<void> {
		try {
			const { PHPSESSID } = req.body as ICredentials;

			const authenticationResult = await AuthService.auth(PHPSESSID as string);
			if (authenticationResult) {
				res.status(200).json({ ok: true, message: 'Authentication successful' });
			} else {
				throw new Exception(Errors.AuthCredentialsIncorrect, 'Authentication credentials are incorrect');
			}
		} catch (err) {
			return handlerError('Failed...', err as Response);
		}
	}
}
