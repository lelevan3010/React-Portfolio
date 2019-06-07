import React from 'react';
import ProjectItem from '../../components/ProjectItem/index';
import Header from '../../components/Header/index';

import './styles.css';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';

import SkillsHeader from '../../Images/SkillsImages/minimal-lake-sunset-img.jpg'

function Projects() {
        return (
                <div className="TextColor">
                        <Header imgURL={SkillsHeader}>
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
                                <ProjectItem/>
                        </Row>
                </div>
        );
}

export default Projects;
