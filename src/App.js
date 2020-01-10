import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Hello CI!
        </h3>
        <p>
          A demo website for showing different CI pipelines.
        </p>
        <a
          className="App-link"
          href="https://github.com/rohit-smpx/hello-ci-frontend">
            View The Repo
        </a>
        <a
          className="App-link"
          href="https://slides.gohri-rohit.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Presentation
        </a>
      </header>
    </div>
  );
}

export default App;
