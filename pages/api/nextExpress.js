import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'uploads/'});

const app = express();

const uploadExpressMiddleware = upload.array('images');

app.use(uploadExpressMiddleware);

app.post('/api/nextExpress', (req, res) => {

    console.log(req.body, req.files);
    res.status(200).json({ data: 'success' });
});


export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };
