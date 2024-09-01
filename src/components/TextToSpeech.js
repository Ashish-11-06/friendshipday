// src/TextToSpeech.js
import React, { useState, useEffect } from 'react';

const predefinedMessage = "अक्का, अहो  अक्का ! . तमभाकू खाली का? खाली का ?";

const TextToSpeech = () => {
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const handleVoicesChanged = () => {
      const availableVoices = speechSynthesis.getVoices();
      console.log('Available voices:', availableVoices); // Log available voices

      // Find and set the desired Marathi voice
      const targetVoice = availableVoices.find(voice => voice.name.includes('male') && voice.lang === 'mr-IN') ||
                          availableVoices.find(voice => voice.name === 'Microsoft Aarohi Online (Natural) - Marathi (India) (mr-IN)') || 
                          availableVoices.find(voice => voice.lang === 'hi-IN') || 
                          availableVoices.find(voice => voice.lang === 'mr-IN') || 
                          availableVoices.find(voice => voice.lang === 'en-US'); // Fallback to English if no Marathi voice is available
      setSelectedVoice(targetVoice);
    };

    // Initial load
    handleVoicesChanged();

    // Listen for voices changed event
    speechSynthesis.onvoiceschanged = handleVoicesChanged;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleSpeak = () => {
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(predefinedMessage);
      utterance.voice = selectedVoice;
      utterance.lang = 'mr-IN'; // Set language to Marathi
      window.speechSynthesis.speak(utterance);
    } else {
      alert('No suitable voice available.');
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel(); // Stops the currently speaking utterance
  };

  return (
    <div>
      <h1>Friendship Day Surprise फॉर यू किरा!</h1>
      <button onClick={handleSpeak}>Play Surprise Message</button>
      <button onClick={handleStop}>Stop Message</button> {/* Add Stop button */}
    </div>
  );
};

export default TextToSpeech;
