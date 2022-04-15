const express = require('express');
const router = express.Router();
const courseapi = require('../controllers/courseControllers');
const multer = require('multer');

//multer middleware  to upload images 
const storage = multer.diskStorage({
    //setting up upload path
    destination: function (req, file, cb) {
      cb(null, './uploads/courseImgs/')
    },
    //naming convention for  uploading  file
    filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now()+"_"+file.originalname);
    }
  });

  let upload = multer({
      storage: storage
  }).single("image");




//get all the course 
router.get('/',courseapi.fetchAllcourses);

//crete new course with image
router.post('/',upload,courseapi.createcourse);

//get course id 
router.get('/:id',courseapi.fetchcourseByid);

//update course 
router.patch('/:id',upload,courseapi.updatecourseByid);

//delete course
router.delete('/:id',courseapi.deletecourseByid);

module.exports = router;