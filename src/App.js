import React from 'react';
import Navigation from '../src/components/Navigation/navigation'
import './App.css'
import SimpleSlider from './components/Slider/homeSlider';
import CardList from './components/CardsHomepage/CardList';
import ServiceList from './components/ServiceList/serviceList';


function App() {
  return (
    <div  className="App">
      <header className="App-header">
        <Navigation/>
        <SimpleSlider/>
      </header>
      <body>
      <CardList />
      <ServiceList/>
      </body>
    </div>
  );
}

export default App;
