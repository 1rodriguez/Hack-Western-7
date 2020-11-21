const express = require('express');
const router = express.Router();

const File = require('../controller/file')

router.post('/file', File.convert);

module.exports = router;