import express from 'express';
const router = express.Router();

router.post('/api/users/signout', (req, res) => {
	res.cookie('jwt', '', { expires: new Date(0) });
	// req.session = null;
	res.send({});
});

export { router as signoutRouter };
