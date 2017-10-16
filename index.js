const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

app.listen(8000, () => {
	console.log('listening on port 8080');
})