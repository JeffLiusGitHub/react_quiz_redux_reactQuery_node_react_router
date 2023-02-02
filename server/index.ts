import express from 'express';
import 'express-async-errors';
import cookieParser from 'cookie-parser';
import { json } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { quizDataRouter } from './routes/quizData';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
const app = express();
// app.set('trust proxy', true);
app.use(cors());
dotenv.config();
app.use(json());
app.use(cookieParser());
app.use(
	cookieSession({
		signed: false,
		secure: true,
	})
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(quizDataRouter);

app.all('*', async (req, res) => {
	throw new NotFoundError();
});
app.use(errorHandler);

const start = async () => {
	if (!process.env.JWT_KEY) {
		throw new Error('JWT key should be defined');
	}
	try {
		await mongoose.connect(process.env.MONGO_URL!);
		console.log('connected to mongodb');
	} catch (err) {
		console.error(err);
	}
};

app.listen(8080, () => {
	console.log('quiz auth server listening on port 8080!');
});

start();
