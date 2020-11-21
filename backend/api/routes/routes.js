const express = require('express');
const router = express.Router();

const File = require('../controller/file')
const Multer = require('../middleware/multer')
const ClearUploads = require('../middleware/clearUploads')

router.post('/file', ClearUploads.removeUploads, Multer.upload.single('video'), File.convert);

module.exports = router;