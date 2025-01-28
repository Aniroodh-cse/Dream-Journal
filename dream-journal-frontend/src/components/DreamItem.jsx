import React from 'react';

const DreamList = ({ dreams, onDelete }) => {
  return (
    <div>
      {dreams.map((dream) => (
        <div key={dream._id} className="dream-item">
          <h3>{dream.title}</h3>
          <p>{dream.description}</p>
          <small>{new Date(dream.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default DreamList;
