import nextConnect from 'next-connect';
import multer from 'multer';

// Returns a Multer instance that provides several methods for generating 
// middleware that process files uploaded in multipart/form-data format.
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function ( req, file, cb ) {
      cb( null, file.originalname);
  }
}
);
const upload = multer({storage});

const apiRoute = nextConnect({
  onError: (err, req, res: any, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).send("Page is not found");
  },
});

// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.single('file');

// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware);

apiRoute.post((req: any, res: any) => {
  let allPath = '/' + req.file.destination.split('/')[2] + '/' + req.file.filename;
  res.send(allPath)
})


export default apiRoute

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};