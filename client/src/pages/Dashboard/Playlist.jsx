import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider';
import Bookmark from '../../components/Bookmark';

const Playlist = () => {
  const [playlists, setPlaylist] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5500/api/v2/playlist/getplaylist', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPlaylist(response.data.playlists);
    } catch (error) {
      console.error('Error fetching playlists:', error);
      setError('Failed to fetch playlists');
    }
  };

  const addPlaylist = async () => {
    if (newPlaylist.trim() !== '' && newDescription.trim() !== '') {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          'http://localhost:5500/api/v2/playlist/addplaylist',
          { title: newPlaylist, description: newDescription },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPlaylist([...playlists, response.data.playlist]);
        setNewPlaylist('');
        setNewDescription('');
        setShowForm(false); // Close the form after adding the playlist
      } catch (error) {
        console.error('Error adding playlist:', error);
        setError('Failed to add playlist');
      }
    } else {
      setError('Please fill in both the title and description');
    }
  };

  const toggleBookmark = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.patch(
        `http://localhost:5500/api/v2/playlist/${id}/bookmark`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPlaylist(playlists.map((playlist) =>
        playlist._id === id ? response.data : playlist
      ));
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      setError('Failed to toggle bookmark');
    }
  };

  return (
    <>
      <Slider />
      <div className='container mx-auto p-4 mt-6'>
        <div className='text-center mb-4'>
          <button
            onClick={() => setShowForm(!showForm)}
            className='bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700'
          >
            {showForm ? 'Close Form' : 'Add Playlist'}
          </button>
          <Link to="/bookmarks" className='ml-4 bg-green-500 text-white rounded-lg p-2 hover:bg-green-700'>
            View Bookmarked Playlists
          </Link>
        </div>

        {showForm && (
          <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'>
            <div className='bg-white rounded-lg p-6 w-full max-w-lg'>
              <h2 className='text-xl font-bold mb-4'>Add a New Playlist</h2>
              <input
                type='text'
                value={newPlaylist}
                onChange={(e) => setNewPlaylist(e.target.value)}
                placeholder='Playlist Title'
                className='border rounded-lg p-2 w-full mb-4'
              />
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder='Playlist Description'
                className='border rounded-lg p-2 w-full mb-4'
                rows='3'
              />
              <div className='flex justify-end'>
                <button
                  onClick={addPlaylist}
                  className='bg-green-500 text-white rounded-lg p-2 hover:bg-green-700'
                >
                  Save Playlist
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className='ml-2 bg-red-500 text-white rounded-lg p-2 hover:bg-red-700'
                >
                  Cancel
                </button>
              </div>
              {error && <p className='text-red-500 mt-2'>{error}</p>}
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
          {playlists.map((playlist) => (
            <div
              key={playlist._id}
              className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center'
            >
              <h3 className='text-lg font-bold mb-2'>{playlist.title}</h3>
              <p className='text-sm text-gray-600'>{playlist.description}</p>
              <Bookmark
                isBookmarked={playlist.bookmarked}
                onToggle={() => toggleBookmark(playlist._id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Playlist;
