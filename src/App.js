import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from '../src/components/Navigation/navigation'
import './App.css'
import SimpleSlider from './components/Slider/homeSlider';
import CardList from './components/CardsHomepage/CardList';
import ServiceList from './components/ServiceList/serviceList';
import Logare from './components/User/logare';
import Inregistrare from './components/User/inregistrare';
import Consumator from './components/Consumator/consumator';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      route:'logare',
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    return (
      <div  className="App">
          <div>
          <BrowserRouter>
            <div>
              <div>
                <Navigation/>
                <Route path='/' exact component={Home}/>
                <Route path='/logare' exact component={Logare}/>
                <Route path='/inregistrare' exact component={Inregistrare}/>
                <Route path='/consumator' component={Consumator}/>
                <Footer/>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </div>

    );
  }
}
// function App() {


// }

export default App;
