const express = require('express');
const router = express.Router();
const lectureapi = require('../controllers/lectureControllers');
const multer = require('multer');

//multer middleware  to upload images 
const storage = multer.diskStorage({
    //setting up upload path
    destination: function (req, file, cb) {
      cb(null, './uploads/lectureImgs/')
    },
    //naming convention for  uploading  file
    filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now()+"_"+file.originalname);
    }
  });

  let upload = multer({
      storage: storage
  }).single("image");




//get all the lecture 
router.get('/',lectureapi.fetchAlllectures);

//crete new lecture with image
router.post('/',upload,lectureapi.createlecture);

//get lecture id 
router.get('/:id',lectureapi.fetchlectureByid);

//update lecture 
router.patch('/:id',upload,lectureapi.updatelectureByid);

//delete lecture
router.delete('/:id',lectureapi.deletelectureByid);

module.exports = router;