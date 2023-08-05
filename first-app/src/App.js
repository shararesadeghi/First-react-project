import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Landing from './component/Landing';
import Products from './component/Products';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
         <Route path="/products" component={Products}/>
         <Route path="/aboutus" component={AboutUs}/>
         <Route path="/" component={Landing}/>
         </Switch>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
