import React from 'react';
import InputFields from './InputFields.js'
import './App.css';
function App() {
  return (
    <div className="main-container">
        <h1 align="center"> To-Do App</h1>
        <InputFields title="" desc="" date=""/>
    </div>
    );
}

export default App;
