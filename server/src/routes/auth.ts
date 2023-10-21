import { Router, } from 'express';
import { body, } from 'express-validator'
import { AuthController, } from '../controllers/auth.controller';

const router = Router();

/* eslint-disable */
router.post('/auth',
	body('PHPSESSID').isString(),
	AuthController.auth
)


export default router;