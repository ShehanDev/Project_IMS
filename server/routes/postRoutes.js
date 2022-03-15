const express = require('express');
const router = express.Router();
const postapi = require('../controllers/postControllers');
const multer = require('multer');

//multer middleware  to upload images 
const storage = multer.diskStorage({
    //setting up upload path
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    //naming convention for  uploading  file
    filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now()+"_"+file.originalname);
    }
  });

  let upload = multer({
      storage: storage
  }).single("image");




//get all the post 
router.get('/',postapi.fetchAllposts);

//crete new post with image
router.post('/',upload,postapi.createPost);

//get post id 
router.get('/:id',postapi.fetchPostByid);

//update post 
router.patch('/:id',upload,postapi.updatePostByid);

//delete post
router.delete('/:id',postapi.deletePostByid);

module.exports = router;