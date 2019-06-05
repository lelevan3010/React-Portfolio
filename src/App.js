import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';

import About from './pages/About/index';
import Skills from './pages/Skills/index';
import Projects from './pages/Projects/index';
import NotFound from './pages/NotFound/index';

import Banner from './components/Banner/index';

function App() {
  return (
    <Row noGutters={true}>
      <Col md={3}>
        <Banner/>
      </Col>
      <Col className="RightHandSideComponent" md={9}>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/skills/" component={Skills} />
            <Route path="/projects/" component={Projects} />
            <Route component={NotFound} />
          </Switch>
      </Col>
    </Row> 
  );
}

export default App;
