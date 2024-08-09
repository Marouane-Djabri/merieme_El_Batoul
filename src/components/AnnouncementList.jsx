import React from 'react';
import PropTypes from 'prop-types';

export default function AnnouncementList({ announcements, onAnnouncementClick, onDelete }) {
  return (
    <ul>
      {announcements.map((announcement) => (
        <li 
          key={announcement._id} 
          className="flex justify-between items-center bg-white p-4 mb-2 shadow rounded"
        >
          <div className="flex-grow" onClick={() => onAnnouncementClick && onAnnouncementClick(announcement)}>
            <h3 className="font-bold">{announcement.title}</h3>
            <p>{announcement.content}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents the click event from triggering the onAnnouncementClick
              onDelete && onDelete(announcement._id);
            }}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

AnnouncementList.propTypes = {
  announcements: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAnnouncementClick: PropTypes.func,
  onDelete: PropTypes.func, // Add this line to accept onDelete prop
};
