
const express  = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController')
router.route('/getblogs').get(blogController.getBlogs)
router.route('/postblogs').post(blogController.postblogs)
router.route('/deleteblogs').delete(blogController.deletBlogs)

module.exports = router