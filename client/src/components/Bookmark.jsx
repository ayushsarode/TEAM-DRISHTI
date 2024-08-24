import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Bookmark = ({ isBookmarked, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer text-yellow-500 ${isBookmarked ? 'text-yellow-500' : 'text-gray-400'}`}
      style={{ fontSize: '24px' }}
    >
      {isBookmarked ? <FaStar /> : <FaRegStar />}
    </div>
  );
};

Bookmark.propTypes = {
  isBookmarked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Bookmark;
