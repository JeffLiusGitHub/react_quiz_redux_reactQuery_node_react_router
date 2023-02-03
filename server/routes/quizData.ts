import express, { Request, Response } from 'express';
import data from '../data';
// import data from '../data.js';
const router = express.Router();

router.get('/quiz/title', (req: Request, res: Response) => {
	const title = data.map(({ id, question }) => ({ id, question }));
	res.status(200).send(title);
});

router.get('/quiz/:id', (req: Request, res: Response) => {
	const quizId = parseInt(req.params.id);
	if (isNaN(quizId) || quizId < 1 || quizId > data.length) {
		return res.status(200).send({});
	}
	const dataWithId = data[quizId - 1];
	const { answer, ...rest } = dataWithId;
	res.status(200).send(rest);
});

export { router as quizDataRouter };
