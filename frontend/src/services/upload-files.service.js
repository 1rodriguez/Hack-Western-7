import http from '../http-common';
import download from 'downloadjs';

class UploadFilesService {
    url = 'http://localhost:5000/api/';
    upload(file) {
        const formData = new FormData();

        formData.append("video", file);
        
        fetch(this.url + 'convert',{
        method: 'POST',
        credentials: 'include',
        body: formData
        })
      .then(res => {
          return res.blob()
        })
      .then(body => {
          download(body, 'output.txt', 'text/plain')
        })
     
    }

    speedUp(file, speed) {
        const formData = new FormData();

        formData.append("video", file);
        formData.append("speed", speed);

        fetch(this.url + 'speedup', {
            method: 'POST',
            credentials: 'include',
            body: formData
        })
        .then( res => {
            return res.blob()
        })
        .then(body => {
            console.log(body)
            download(body, 'output.mp4', 'video/mp4') 
        })

    }
}

export default UploadFilesService;