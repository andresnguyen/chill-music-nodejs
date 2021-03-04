const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome my project')
})


module.exports = router;