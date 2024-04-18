import express from 'express';
import multer from 'multer';
import { createUser, deleteuser, getUser, getUserId, login, searchUser, updateUser } from '../controllers/user.js';
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
router.get('/', getUser);
router.get('/:id', getUserId);
router.get('/search/:key', searchUser);
router.post('/', createUser);
router.post('/login', login);
router.delete('/:id', deleteuser);
// router.put('/:id', updateUser)



export default router;