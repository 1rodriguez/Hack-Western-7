import React, { Component } from 'react'
import UploadComponent from './components/UploadComponent/UploadComponent'
class FileList extends Component {
state = {
    files: [
      'nice.pdf',
      'verycool.jpg',
      'amazing.png',
      'goodstuff.mp3',
      'thankyou.doc'
    ]
  }
 handleDrop = (files) => {
    let fileList = this.state.files
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      fileList.push(files[i].name)
    }
    this.setState({files: fileList})
  }
render() {
    return (
      <UploadComponent handleDrop={this.handleDrop}>
        <div style={{height: 100, width: 75}}>
          {this.state.files.map((file, i) =>
            <div key={i}>{file}</div>
          )}
        </div>
      </UploadComponent>
    )
  }
}
export default FileList