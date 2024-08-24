import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider';
import Bookmark from '../../components/Bookmark';
import { RiPlayListAddLine } from "react-icons/ri";


// Import images
import image1 from '../../assets/images/playlist/elearning.gif'; // Adjust path as needed
import image2 from '../../assets/images/playlist/open-book.gif'; // Adjust path as needed
import image3 from '../../assets/images/playlist/teacher.gif'; // Adjust path as needed

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
      <div className='flex justify-between w-full'>
        <div>
          <Slider />
        </div>
        <div className='container max-w-5xl mx-auto p-4 mt-6 flex-1'>
          <div className='text-start mb-4'>
            <button
              onClick={() => setShowForm(!showForm)}
              className='bg-violet-700 text-white rounded-lg p-3 gap-2 hover:bg-violet-900 flex items-center'
              
            >
              {showForm ? 'Close Form' : 'Add Playlist'}
              <RiPlayListAddLine />

              
            </button>
            
          </div>

          {showForm && (
            <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-10'>
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

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
            {playlists.map((playlist, index) => (
              <div
                key={playlist._id}
                className='bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'
              >
                <div className='relative'>
                  <img
                    src={index % 3 === 0 ? image1 : index % 3 === 1 ? image2 : image3}
                    alt={playlist.title}
                    className='w-full h-50 object-cover' // Adjusted height to 32
                  />
                  <div className='absolute top-2 right-2'>
                    <Bookmark
                      isBookmarked={playlist.bookmarked}
                      onToggle={() => toggleBookmark(playlist._id)}
                    />
                  </div>
                </div>
                <div className='p-6'> {/* Increased padding for better spacing */}
                  <h3 className='text-lg font-semibold mb-2'>{playlist.title}</h3>
                  <p className='text-sm text-gray-700'>{playlist.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlist;
