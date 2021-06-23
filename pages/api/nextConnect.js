import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({ dest: 'uploads/'});



const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.array('images');

apiRoute.use(uploadMiddleware);


// Process a POST request
apiRoute.post((req, res) => {
    console.log(req.body, req.files);
    res.status(200).json({ data: 'success' });
});

export default apiRoute;


export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };
