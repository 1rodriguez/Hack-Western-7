import { React, Component } from 'react';
import './Upload.css';

import UploadFilesService from '../../services/upload-files.service';

class Upload extends Component {


    fileService = new UploadFilesService();

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
            input: "",
        }
    }

    onChangeHandler = (event) => {
        this.setState( { selectedFile: event.target.files[0],
        loaded: 0,
    })
    }

    onClickHandler = () => {
        this.fileService.upload(this.state.selectedFile)
    }

    speedUpHandler = (e) => {
        this.setState({ input: e.target.value })
    }

    fetchSpeed = () => {
        this.fileService.speedUp(this.state.selectedFile, parseFloat(this.state.input));
    }

    render() {
        return(
            <div className="container">
        <div className="row">
        <div className="col-md-6">
            <form method="post" action="#" id="#">
            
                
                
                
                    <label>Upload Your File </label>
                <div className="form-group files">
                    <div className = "inputDropBoxDiv">
                        <div className = "center">
                            <input type="file" name="file" className="form-control" multiple="" onChange={this.onChangeHandler}>
                            </input>
                        </div>
                    </div>
                </div>
                
                
            </form>
            <div className="input-area">
                <div className = "centerForm">

                    <div className="upload-area">
                        <button className="upload-bt" onClick={this.onClickHandler}>Upload</button>
                    </div>
                    <div className = "formInput">
                        <input placeholder="factor" onChange={event => this.speedUpHandler(event)}></input>
                        <button onClick={this.fetchSpeed}>Speed Up</button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    </div>
        )
    }
}


export default Upload;