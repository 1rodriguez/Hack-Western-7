const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    const arr = file.originalname.split('.')
    const fileType = arr[arr.length-1]
    cb(null, 'inputVideo.'+fileType)
  }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'video/mp4' || file.mimetype === 'video/quicktime'){
      cb(null, true)
    }
    else{
      cb(new Error('Incorrect File Type'), false)
    }
}

exports.upload = multer({
    storage: storage,
    fileFilter: fileFilter
})