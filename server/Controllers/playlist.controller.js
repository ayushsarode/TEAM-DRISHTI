import Playlist from '../Models/playlist.model.js';


export const addPlaylist = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.user._id;

        if (!title || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newPlaylist = await Playlist.create({
            user: userId,
            title,
            description,
        });

        res.status(201).json({
            success: true,
            message: "Todo added successfully",
            playlist: newPlaylist,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

export const getPlaylist = async (req, res) => {
    try {
        const userId = req.user._id;
        const playlists = await Playlist.find({ user: userId });

        res.status(200).json({
            success: true,
            playlists,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};