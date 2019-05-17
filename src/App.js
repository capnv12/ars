import React from 'react';
import Navigation from '../src/components/Navigation/navigation'
import './App.css'
import SimpleSlider from './components/Slider/homeSlider';


function App() {
  return (
    <div  className="App">
      <header className="App-header">
        <Navigation/>
        <SimpleSlider/>
      </header>
    </div>
  );
}

export default App;
