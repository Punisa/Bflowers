import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Delivery from './Components/Delivery/Delivery'

import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Header/>
              {/* <Main/> */}
              <Route exact path='/' component={Main}/>
              <Route exact path='/delivery' component={Delivery}/>
              {/* <Delivery/> */}
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
