import { React, Component } from 'react';
import './Upload.css';

import UploadFilesService from '../../services/upload-files.service';

class Upload extends Component {

    fileService = new UploadFilesService();

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
        }
    }

    onChangeHandler = (event) => {
        this.setState( { selectedFile: event.target.files[0],
        loaded: 0 })
    }

    onClickHandler = () => {
        this.fileService.upload(this.state.selectedFile)
    }

    render() {
        return(
            <div className="container">
        <div className="row">
        <div className="col-md-6">
            <form method="post" action="#" id="#">
            
                
                
                
                <div className="form-group files">
                    <label>Upload Your File </label>
                    <input type="file" name="file" className="form-control" multiple="" onChange={this.onChangeHandler}>
                    </input>
                </div>
                
                
            </form>
            
            <button onClick={this.onClickHandler}>Upload</button>
            
        </div>
        </div>
    </div>
        )
    }
}


export default Upload;