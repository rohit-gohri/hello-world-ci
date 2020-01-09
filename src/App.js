import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A demo website for showing different CI pipelines.
          View the code at <a href="https://github.com/rohit-smpx/hello-ci-frontend">https://github.com/rohit-smpx/hello-ci-frontend</a>
        </p>
        <a
          className="App-link"
          href="https://slides.gohri-rohit.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Slides
        </a>
      </header>
    </div>
  );
}

export default App;
