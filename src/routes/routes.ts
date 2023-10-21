import { Router, } from 'express';
import { body, } from 'express-validator'
import { AuthController, } from '../controllers/auth.controller';
import { UserController, } from '../controllers/user.controller';

const router = Router();

/* eslint-disable */
router.post('/auth',
	body('PHPSESSID').isString(),
	AuthController.auth
)
router.get('/balance', UserController.getBalance)


export default router;