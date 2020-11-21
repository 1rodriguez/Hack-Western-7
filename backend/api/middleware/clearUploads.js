const fs = require('fs');
const path = require('path');

exports.removeUploads = async (req, res, next) => {
    try {
        fs.rmdirSync(path.join(__dirname, '../../', 'uploads'), {recursive: true})
        //file removed
        fs.mkdir(path.join(__dirname, '../../', 'uploads'), {}, (e) => {
            if(e){
                console.log(e)
            }
        })
        return next();
      } catch(err) {
        console.error(err)
      }
}