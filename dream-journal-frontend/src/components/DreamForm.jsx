import React, { useState } from 'react';
import axios from 'axios';

const DreamForm = ({ onDreamAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:5000/api/dreams', {
        title,
        description,
      });

      
      onDreamAdded(response.data);

      
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding dream:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Dream Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Dream Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Dream</button>
    </form>
  );
};

export default DreamForm;
