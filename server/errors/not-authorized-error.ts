import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
	statusCode = 401;

	constructor(public message: string) {
		super('Not authorized');

		Object.setPrototypeOf(this, NotAuthorizedError.prototype);
	}
	serializeErrors() {
		return [{ message: 'Not authorized' }];
	}
}

// new RequestValidationError(errors);
