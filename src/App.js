import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';

import About from './pages/About/index';
import Skills from './pages/Skills/index';
import Projects from './pages/Projects/index';
import NotFound from './pages/NotFound/index';
import {
  DevideWorldTour,
  ReactProductsManager,
  GodOfWar,
  ToDoApp,
  ReactNativeCalculator,
  ReactContactManager} 
from './pages/Blogs/index';

import Banner from './components/Banner/index';
import BurgerMenu from './components/BurgerMenu/index';

function App() {
  return (
    <Row noGutters={true}>
      <BurgerMenu/>
      <Col xs={0} sm={0} lg={3}>
        <Banner/>
      </Col>
      <Col className="RightHandSideComponent" xs={12} sm={12} xl={9}>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/skills/" component={Skills} />
            <Route path="/projects/" component={Projects} />
            <Route path="/devide-world-tour/" component={DevideWorldTour} />
            <Route path="/products-manager/" component={ReactProductsManager} />
            <Route path="/god-of-war/" component={GodOfWar} />
            <Route path="/to-do-app/" component={ToDoApp} />
            <Route path="/react-native-calculator/" component={ReactNativeCalculator} />
            <Route path="/react-contact-manager/" component={ReactContactManager} />
            <Route component={NotFound} />
          </Switch>
      </Col>
    </Row> 
  );
}

export default App;
