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
    <Row>
      <Col className="NoPadding" md={3}>
        <Banner/>
      </Col>
      <Col className="NoPadding RightHandSideComponent">
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
