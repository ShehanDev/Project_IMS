const express = require('express');
const router = express.Router();
const postapi = require('../controllers/postControllers');


//get all the post 
router.get('/',postapi.fetchAllposts);

module.exports = router;