import React from 'react';
import ProjectItemLeft from '../../components/ProjectItemLeft/index';
import ProjectItemRight from '../../components/ProjectItemRight/index';
import Header from '../../components/Header/index';

import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';

function Projects() {
        return (
                <div className="TextColor">
                        <Header>
                                <div className="bird-container bird-container--one">
                                        <div className="bird bird--one"></div>
                                </div>

                                <div className="bird-container bird-container--two">
                                        <div className="bird bird--two"></div>
                                </div>

                                <div className="bird-container bird-container--three">
                                        <div className="bird bird--three"></div>
                                </div>

                                <div className="bird-container bird-container--four">
                                        <div className="bird bird--four"></div>
                                </div>
                                <section className="GradientBackgroundTitle">
                                        <h1>My Projects</h1>
                                </section>
                        </Header>
                        <Row noGutters={true}>
                                <Col className="NoPadding">
                                        <ProjectItemLeft/>
                                </Col>
                                <Col className="NoPadding">
                                        <ProjectItemRight/>
                                </Col>
                        </Row>
                </div>
        );
}

export default Projects;
