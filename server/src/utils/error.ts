import { Response, } from 'express';
import { Exception, Errors, ErrorsMessages, } from './index';

/* eslint-disable */
export function handlerError(err: Exception | any | undefined, res: Response)  {
    if (err instanceof Exception) {
        res.status(err.code).json({ error: err.msg });
    } else {
        res.status(Errors.InternalServerError).json({ error: ErrorsMessages[Errors.InternalServerError] });
    }
}