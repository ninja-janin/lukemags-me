import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mv from './components/mv/Mv';
import Nav from './components/navbar/Nav';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      < Mv />
      < Nav />
      < About />
      <div>
        Recent Project
      </div>

      <div>
        Experience
      </div>

      <div>
        Education
      </div>

      <div>
        YOU CAN TAKE A CLOSER LOOK AT MY WORK(Github)
      </div>
    </div>
  );
}

export default App;
