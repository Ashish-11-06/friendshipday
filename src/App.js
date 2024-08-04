import React from 'react';
import './App.css';
import TextToSpeech from './components/TextToSpeech.js';
// import ListVoices from './components/ListVoices.js'
function App() {
  return (
    <div className="App">
      {/* <ListVoices></ListVoices> */}
      <TextToSpeech />
    </div>
  );
}

export default App;
