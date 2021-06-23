const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const multerMiddleware = (handler) => (req, res) => {
    req = upload.single('image');

    return handler(req, res);
}

export default multerMiddleware;