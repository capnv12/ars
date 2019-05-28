import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from '../src/components/Navigation/navigation'
import './App.css'
import Logare from './components/User/logare';
import Inregistrare from './components/User/inregistrare';
import Consumator from './components/Consumator/consumator';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Profesional from './components/Profesional/profesional';
import Enterprise from './components/Enterprise/enterprise';


class App extends React.Component{
  // constructor() {
  //   super();
  //   this.state = {
  //     route:'logare',
  //   }
  // }

  // onRouteChange = (route) => {
  //   this.setState({route: route});
  // }

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
                <Route path='/profesional' component={Profesional}/>
                <Route path='/enterprise' component={Enterprise}/>
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
