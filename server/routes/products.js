
import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/products.js';
import multer from 'multer';

const router = express.Router();
const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      const isValid = FILE_TYPE_MAP[file.mimetype];
      let uploadError = new Error('invalid image type');

      if(isValid) {
          uploadError = null
      }
    cb(uploadError, 'public/uploads')
  },
  filename: function (req, file, cb) {
      
    const fileName = file.originalname.split(' ').join('-');
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`)
  }
})

 const uploadOptions = multer({ storage: storage })
router.get('/', getProducts);
router.post('/', uploadOptions.single('image'), createProduct);
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)
export default router;