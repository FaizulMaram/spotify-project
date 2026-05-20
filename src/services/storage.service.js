const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadFile(filePath) {

    const result = await cloudinary.uploader.upload(
        filePath,
        {
            public_id: 'music_' + Date.now(),
            resource_type: "auto",
            folder: 'spotify/music'
        }
    );

    return result;
}

module.exports = {
    uploadFile
};