import React, { useEffect, useState } from 'react';
import { fetchDreams } from './api';
import DreamForm from './components/DreamForm';
import DreamList from './components/DreamList';
import './App.css';

function App() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    const getDreams = async () => {
      const { data } = await fetchDreams();
      setDreams(data);
    };
    getDreams();
  }, []);

  const addDream = (dream) => setDreams([...dreams, dream]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Dream Journal</h1>
      </header>
      <main>
        <DreamForm onDreamAdded={addDream} />
        <DreamList dreams={dreams} />
      </main>
    </div>
  );
}

export default App;
