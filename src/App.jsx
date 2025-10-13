
import { useEffect, useState } from 'react';
import './App.css'
import Course from './Course';
// import image from './assets/andren.jpg'
// import image1 from './assets/richard.jpg'
// import image2 from './assets/sofia.jpg'
import Courselist from './courselist';
import Counter from './count';
import Name from './fetch';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './nav/login';
import About from './nav/about';
import Home from './nav/home';
import './index.css'





function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path= '/Home' element ={<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
 



