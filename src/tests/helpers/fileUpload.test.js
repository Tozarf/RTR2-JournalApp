import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from 'cloudinary'


cloudinary.config({ 
    cloud_name: 'dtmfjiynx', 
    api_key: '777179292437751', 
    api_secret: 'B0wfIkVFH5KzCZnZ_sBrv-8n7TU',
    secure: true
});

describe('Testing file uploading helper', () => {
    
    test('should load a file and return a url', async() => {
        
        const resp = await fetch('https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg');
        const blob = await resp.blob();

        const file = new File([blob],'photo.jpg');
        const url = await fileUpload(file)
        
        expect(typeof url).toBe('string')

        const segments = url.split('/')
        const imgID = segments[segments.length - 1].replace('.jpg','')

        
        const { deleted } = await cloudinary.v2.api.delete_resources(imgID);
        expect(deleted).toEqual({ [imgID]: "deleted" });
    });

    test('should return an error', async() => {
        
        

        const file = new File([],'photo.png');
        const url = await fileUpload(file)
        
        expect(url).toBe(null)
    });
    

})
