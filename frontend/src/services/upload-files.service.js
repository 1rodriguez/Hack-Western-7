import http from '../http-common';

class UploadFilesService {
    upload(file) {
        const formData = new FormData();

        formData.append("file", file);
        console.log(file);

        http.post('/convert', formData).then( res => {
            console.log(res.statusText);
        })
    }
}

export default UploadFilesService;