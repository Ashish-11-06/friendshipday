// src/ListVoices.js
import React, { useEffect, useState } from 'react';

const ListVoices = () => {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const handleVoicesChanged = () => {
      setVoices(speechSynthesis.getVoices());
    };

    speechSynthesis.onvoiceschanged = handleVoicesChanged;

    // Initial load
    handleVoicesChanged();
    
    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  return (
    <div>
      <h1>Available Voices</h1>
      <ul>
        {voices.map((voice, index) => (
          <li key={index}>
            {voice.name} ({voice.lang})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListVoices;
