const musicModel = require('../models/music.model');
const uploadToCloudinary = require('../services/storage.service');
const jwt = require('jsonwebtoken');

async function addMusic(req, res) {
    const token = req.cookies.token;
    console.log("All Cookies:", req.cookies);
    console.log("Token:", token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: 'You are not an artist so you cannot add music!'
            });
        }

        const { title } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const result = await uploadToCloudinary.uploadFile(file.path);

        const music = await musicModel.create({
            uri: result.secure_url,
            title,
            artist: decoded.id
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

    } catch (error) {
        console.error('Error adding music:', error);

        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = {
    addMusic
};