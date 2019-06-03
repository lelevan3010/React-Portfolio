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
                <div>
                        <Header/>
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
