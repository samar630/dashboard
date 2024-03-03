
import express from 'express';
import { createCategories, deleteCategories, getCategories, updateCategories } from '../controllers/categories.js'
import multer from 'multer';
//put validation of image type 
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
const router = express.Router();
router.get('/', getCategories);
router.post('/', uploadOptions.single('image'), createCategories);
router.delete('/:id', deleteCategories)
router.put('/:id', updateCategories)
export default router;


