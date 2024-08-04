// src/App.js
import React from 'react';
import './App.css';
import TextToSpeech from './components/TextToSpeech.js';

function App() {
  return (
    <div className="App">
      <div className="card">
        <h1>Friendship Day Surprise</h1>
        <TextToSpeech />
      </div>
    </div>
  );
}

export default App;
