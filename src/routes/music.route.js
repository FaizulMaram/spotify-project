const express = require('express');
const musicController = require('../controllers/music.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/'
});
const router = express.Router();

router.post('/upload', authMiddleware.authArtist, upload.single('music'), musicController.addMusic);
router.post('/album', authMiddleware.authArtist, musicController.createAlbum);
router.get('/get-all-music', musicController.getAllMusic);
module.exports = router;