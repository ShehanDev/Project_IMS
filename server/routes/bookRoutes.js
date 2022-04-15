const express = require('express');
const router = express.Router();
const bookapi = require('../controllers/booksControllers');
const multer = require('multer');

//multer middleware  to upload images 
const storage = multer.diskStorage({
    //setting up upload path
    destination: function (req, file, cb) {
      cb(null, './uploads/bookImgs/')
    },
    //naming convention for  uploading  file
    filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now()+"_"+file.originalname);
    }
  });

  let upload = multer({
      storage: storage
  }).single("image");




//get all the book 
router.get('/',bookapi.fetchAllbooks);

//crete new book with image
router.post('/',upload,bookapi.createbook);

//get book id 
router.get('/:id',bookapi.fetchbookByid);

//update book 
router.patch('/:id',upload,bookapi.updatebookByid);

//delete book
router.delete('/:id',bookapi.deletebookByid);

module.exports = router;