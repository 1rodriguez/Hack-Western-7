const express = require('express');
const router = express.Router();

const File = require('../controller/file')
const Multer = require('../middleware/multer')
const ClearUploads = require('../middleware/clearUploads')

router.post('/convert', ClearUploads.removeUploads, Multer.upload.single('video'), File.convert);
router.post('/speedup', ClearUploads.removeUploads, Multer.upload.single('video'), File.speedUp);

module.exports = router;