import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bookmarked: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    default: false,
  }
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;
