// src/App.js
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './index.css'; // कॉमन CSS को इम्पोर्ट करें

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;