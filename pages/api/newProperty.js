const fs = require('fs');
const fse = require('fs-extra');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
import cloudinaryConnect from '../../utils/cloudinary';
import dbConnect from'../../utils/dbConnect';
//const dbConnect = require('../../utils/dbConnect');
import runMiddleware from '../../utils/midleware';
const Property = require('../../models/property');


export default async (req, res) => {

    try {

        // Directory to delete after job
        const dir = 'uploads';
        
        const images = [];

        await dbConnect();
        
        await runMiddleware(req, res, upload.array('images'));

        // Getting the proprities from request
        const { area, bathrooms, bedrooms, description, garages, price, type } = req.body;

        const filesArray = req.files;

        // Linking to cloudinary
        const imagesNames = await cloudinaryConnect(filesArray, images);

        console.log(imagesNames, 'inside test.js');


        const property = new Property({
            area,
            bathrooms,
            bedrooms,
            description,
            garages,
            imagesNames,
            price,
            type
        })


        const result = await property.save();

        console.log(dir);

        
        // delete directory recursively
        fse.removeSync(dir, { recursive: true });



        console.log(`"${dir}" directory is deleted!`);


        res.send(result);
        
    } catch (error) {

        console.log(error);
        res.send(error.message)
    }
};

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };