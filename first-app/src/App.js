import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Landing from './component/Landing';
import Products from './component/Products';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import NotFound from './component/NotFound';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
         <Route path="/products" element={<Products/>}/>
         <Route path="/aboutus/*" element={<AboutUs/>}/>
         <Route path="/" element={<Landing/>}/>
         <Route path="/notfound" element={<NotFound/>}/>
         <Route path="/*" element = {<Navigate to="/notfound"/>}/>
         </Routes>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
