const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const options = {
    folder: 'myfolder/mysubfolder',
    //public_id: 'myfolder/mysubfolder/apartamento'
    use_filename: true,
    unique_filename: false
}


async function cloudinaryConnect(filesArray, imagesNamesArray) {

    
    for(let i = 0; i < filesArray.length; i++) {

        const filePath = `uploads/${filesArray[i].filename}`;

        await cloudinary.uploader.upload(filePath, options, function(error, result) {
    
            if(error) {
                console.log(error);
            }
                    
            
            imagesNamesArray.push(result.secure_url);
            
        });
    }
    
    console.log(imagesNamesArray, 'inside cloudinary.js');

    return imagesNamesArray;
}

export default cloudinaryConnect;