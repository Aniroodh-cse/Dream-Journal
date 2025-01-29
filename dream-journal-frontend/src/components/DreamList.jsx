import React from 'react';

const DreamList = ({ dreams = [] }) => {
  
  return (
    <div className="dream-list">
      {dreams.length > 0 ? (
        dreams.map((dream) => (
          <div key={dream._id} className="dream-item">
            <h3>{dream.title}</h3>
            <p>{dream.description}</p>
            <small>{new Date(dream.date).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>No dreams to display.</p> 
      )}
    </div>
  );
};

export default DreamList;
