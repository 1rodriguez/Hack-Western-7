exports.convert = async (req, res) => {
    try{
        const {file} = req.body;

        const spawn = require("child_process").spawn;
        const pp = spawn('python',["../python/venv/main.py"]);

        pp.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        });

        pp.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        });

        pp.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        });

        console.log(pp)
        // const txt = pythonProcess.convertToTxt(file);

        return res.status(200).send({
            message: "Success",
            // txt: txt
        });
    } catch(e){
        console.log(e)
        return res.status(500).send({
            error: {
               message: e
            } 
        });
    }
}