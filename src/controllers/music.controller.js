const musicModel = require('../models/music.model');
const uploadToCloudinary = require('../services/storage.service');
const jwt = require('jsonwebtoken');
const albumModel = require('../models/album.model');

async function addMusic(req, res) {

    const { title } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await uploadToCloudinary.uploadFile(file.path);

    const music = await musicModel.create({
        uri: result.secure_url,
        title,
        artist: req.user.id
    });

    res.status(201).json({
        message: 'Music added successfully',
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    });

}

async function createAlbum(req, res) {

    const { title, musicIds } = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        musics: musicIds
    });

    res.status(201).json({
        message: 'Album created successfully',
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }
    });

}

async function getAllMusic(req, res) {
    const music = await musicModel.find().populate('artist');

    res.status(200).json({
        message: 'Music retrieved successfully',
        music
    });
}

module.exports = {
    addMusic,
    createAlbum,
    getAllMusic
};