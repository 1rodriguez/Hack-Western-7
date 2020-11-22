import http from '../http-common';
import download from 'downloadjs';

class UploadFilesService {
    upload(file) {
        const formData = new FormData();

        formData.append("video", file);
        
        fetch('http://localhost:5000/api/convert',{
        method: 'POST',
        credentials: 'include',
        body: formData
        })
      .then(res => {
          console.log(res)
         
          return res.blob()
        })
      .then(body => {
          console.log(body)
          download(body, 'something.txt', 'text/plain')
        })
     
    }
}

export default UploadFilesService;