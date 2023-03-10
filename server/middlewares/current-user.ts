import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
	id: string;
	email: string;
}

declare global {
	namespace Express {
		interface Request {
			currentUser?: UserPayload;
		}
	}
}

export const currentUser = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(req.session);
	console.log(req.cookies);

	if (!req.cookies.jwt) {
		return next();
	}
	try {
		const payload = jwt.verify(
			req.cookies.jwt,
			process.env.JWT_KEY!
		) as UserPayload;
		req.currentUser = payload;
	} catch (err) {}
	next();
};
