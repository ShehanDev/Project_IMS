const express = require('express');
const router = express.Router();
const studentapi = require('../controllers/studenntControllers');
const multer = require('multer');

//multer middleware  to upload images 
const storage = multer.diskStorage({
    //setting up upload path
    destination: function (req, file, cb) {
      cb(null, './uploads/studentImgs/')
    },
    //naming convention for  uploading  file
    filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now()+"_"+file.originalname);
    }
  });

  let upload = multer({
      storage: storage
  }).single("image");




//get all the student 
router.get('/',studentapi.fetchAllstudents);

//crete new student with image
router.post('/',upload,studentapi.createstudent);

//get student id 
router.get('/:id',studentapi.fetchstudentByid);

//update student 
router.patch('/:id',upload,studentapi.updatestudentByid);

//delete student
router.delete('/:id',studentapi.deletestudentByid);

module.exports = router;