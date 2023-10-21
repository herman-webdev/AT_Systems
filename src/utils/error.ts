/* eslint-disable @typescript-eslint/no-explicit-any */
export class ApiError extends Error {
	public status: number;
	public errors: any[];
  
	constructor(status: number, message: string, errors: any[] = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}
  
	static Unauthorized(message = 'Unauthorized', errors: any[] = []) {
		return new ApiError(401, message, errors);
	}
  
	static BadRequest(message = 'Bad Request', errors: any[] = []) {
		return new ApiError(400, message, errors);
	}
  
	static NotFound(message = 'Not Found', errors: any[] = []) {
		return new ApiError(404, message, errors);
	}
}
  