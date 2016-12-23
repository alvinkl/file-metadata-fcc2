const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/get-file-size', upload.single('file') ,(req, res, next) => {
  res.send(req.file);
});

module.exports = router;
