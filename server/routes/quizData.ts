import express, { Request, Response } from 'express';
import data from '../data';
// import data from '../data.js';
const router = express.Router();

router.get('/quiz/:param', (req: Request, res: Response) => {
	const param = parseInt(req.params.param);
	if (isNaN(param)) {
		return res.send({});
	}
	res.send(param - 1 < data.length && param - 1 >= 0 ? data[param - 1] : {});
});

export { router as quizDataRouter };
