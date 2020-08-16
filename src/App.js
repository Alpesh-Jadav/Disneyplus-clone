import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import FooterPart from './components/FooterPart';
import ChennelsScreen from './components/ChennelsScreen';
import LanguagesScreen from './components/LanguagesScreen';
import GenresScreen from './components/GenresScreen';

function App() {

        const [darkTheme , setDarkTheme] = useState(false)
  return (

   
    <Router>
    <Switch>
      <Route exact path="/">
      <div className={ darkTheme ? `ultra-container light-dark` : `ultra-container`}>
           <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
           <LandingPage darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
           <FooterPart darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          </div>
          
        

      </Route>
      <Route exact path="/chennels">
      <div className={ darkTheme ? `ultra-container light-dark` : `ultra-container`}>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
           <ChennelsScreen />
           <FooterPart darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
          
      </Route>
      <Route exact path="/languages">
      <div className={ darkTheme ? `ultra-container light-dark` : `ultra-container`}>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
           <LanguagesScreen />
           <FooterPart darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
          
      </Route>
      <Route exact path="/genre">
      <div className={ darkTheme ? `ultra-container light-dark` : `ultra-container`}>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
           <GenresScreen />
           <FooterPart darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
          
      </Route>
    </Switch>
    </Router>
    
    
  );
}

export default App;
