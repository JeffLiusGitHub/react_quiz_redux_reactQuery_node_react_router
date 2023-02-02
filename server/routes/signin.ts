import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';
import { Password } from '../services/password';

const router = express.Router();

router.post(
	'/api/users/signin',
	[
		body('email').isEmail().withMessage('email must be valid'),
		body('password')
			.trim()
			.notEmpty()
			.withMessage('You must supply a password'),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		const { email, password } = req.body;
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			const isPasswordMatch = await Password.compare(
				existingUser.password,
				password
			);
			if (isPasswordMatch) {
				const userJwt = jwt.sign(
					{
						id: existingUser.id,
						email: existingUser.email,
					},
					process.env.JWT_KEY!
				);

			
				// {httpOnly: true}
				// req.session = { jwt: userJwt };
				// req.session = { jwt: userJwt };
				res.cookie('jwt', userJwt);
				return res.status(200).send(existingUser);
			} else {
				throw new BadRequestError('Invalid credentials');
			}
		} else {
			throw new BadRequestError('Invalid credentials');
		}
	}
);

export { router as signinRouter };
