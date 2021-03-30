const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('chill music vip pro welcome bro!');
});

module.exports = router;
