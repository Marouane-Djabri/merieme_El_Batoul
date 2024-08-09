import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SidbarAnnoucement = ({ isOpen, toggle, classes = [], onClassClick, onOpenPopup }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-[#d4a02b] w-64 z-30`} style={{ width: '300px', height: '100vh', overflowY: 'auto' }}>
      <div className="flex justify-between items-center p-4">
        <button onClick={onOpenPopup} className="text-white text-2xl">+</button>
        <button onClick={toggle} className="text-white text-2xl">&times;</button>
      </div>
      <div className="p-4">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            onClick={() => onClassClick(classItem._id)}
            className="cursor-pointer text-white mb-2 p-2 rounded hover:bg-yellow-700"
          >
            {classItem.className}
          </div>
        ))}
      </div>
    </div>
  );
};

SidbarAnnoucement.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  classes: PropTypes.array,
  onClassClick: PropTypes.func.isRequired,
  onOpenPopup: PropTypes.func.isRequired,
};

export default SidbarAnnoucement;
