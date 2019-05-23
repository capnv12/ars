import React from 'react';
import Navigation from '../src/components/Navigation/navigation'
import './App.css'
import SimpleSlider from './components/Slider/homeSlider';
import CardList from './components/CardsHomepage/CardList';
import ServiceList from './components/ServiceList/serviceList';
import Footer from './components/Footer/footer';
import Logare from './components/User/logare';
import Inregistrare from './components/User/inregistrare';
import Consumator from './components/Consumator/consumator';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      route:'home',
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    return (
      <div  className="App">
          { this.state.route === 'home' ?
            <div>
              <Consumator/>
              <Navigation/>
              <SimpleSlider/>
              <CardList/>
              <ServiceList/>
            </div>
            :(
              this.state.route === 'logare'
              ? <Logare onRouteChange={this.onRouteChange}/>
              : <Inregistrare onRouteChange={this.onRouteChange}/>
            )
          }
          <Footer/>
      </div>
    );
  }
}
// function App() {


// }

export default App;
