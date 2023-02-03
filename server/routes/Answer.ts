import express, { Request, Response } from 'express';
import data from '../data';
const router = express.Router();

let answerMap = new Map<number, boolean>();
const options = ['A', 'B', 'C', 'D'];

router.get('/answer/getscore', (req: Request, res: Response) => {
	const total = answerMap.size;
	const score = [...answerMap.values()].filter(Boolean).length;

	return res.status(200).send({ total, score });
});

router.post('/answer/:id/:answer', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const answer = req.params.answer.toUpperCase();
	if (!options.includes(answer))
		return res.status(400).send({ error: 'Invalid answer' });
	const question = data.find((d) => d.id === id);
	if (!question) return res.status(400).send({ error: 'Invalid question id' });
	answerMap.set(id, answer === question.answer);
	console.log(answerMap);
	return res.status(201).send({ id, answer });
});

router.delete('/answer/restart', (req: Request, res: Response) => {
	answerMap.clear();
	return res.status(200).send({ message: 'restart quiz' });
});

export { router as answerRouter };
