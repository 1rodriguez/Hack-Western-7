const express = require('express');
const router = express.Router();

const File = require('../controller/file')

router.post('/filer', File.convert);

module.exports = router;