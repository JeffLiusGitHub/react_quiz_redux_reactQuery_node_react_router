const data = require('./data');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.get('/:param', (req, res) => {
	const param = req.params.param;
	if (typeof parseInt(param) !== 'number') {
		return res.send({});
	}
	res.send(param - 1 < data.length && param - 1 >= 0 ? data[param - 1] : {});
});
app.listen(port, () => console.log(`Quiz data listening on port ${port}!`));
