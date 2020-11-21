const fs = require('fs');
const path = require('path')

exports.convert = async (req, res) => {
    try{
        var spawnSync = require("child_process").spawnSync; 
        
        var process = spawnSync('python3',["./api/python/main.py"] );

        return res.status(200).sendFile(path.join(__dirname, '../../', 'recognized.txt'))
    } catch(e){
        console.log(e)
        return res.status(500).send({
            error: {
               message: e
            } 
        });
    }
}

function sync(){

}