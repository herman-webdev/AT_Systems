/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Response, } from 'express';

export class CustomError extends Error {
	public status

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
	}
}

export function handlerError(err: CustomError | any, res: Response) {
	if (err instanceof CustomError) {
		res.status(err.status).json({ error: err.message, });
	} else {
		res.status(500).json({ error: 'Internal Server Error', });
	}
}
