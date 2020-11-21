exports.convert = async (req, res) => {
    try{
        const {file} = req.body;

        return res.status(200).send({
            message: "Success"
        });
    } catch(e){
        return res.status(500).send({
            error: {
               message: "Something went wrong" 
            } 
        });
    }
}