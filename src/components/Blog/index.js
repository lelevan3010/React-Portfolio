import React from 'react';
import GradientHeader from '../../components/GradientHeader/index';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';  
import './styles.css';

function Blog(props) {
    let {title, date, deploy, technology, responsive, github, gifURL, imgURL} = props;
    return (
            <div>
                    <GradientHeader imgURL={imgURL}/>
                    <Container>
                        <section className="Section">
                            <h1>{title}</h1>
                            <p>
                                <span role="img" aria-label="Calendar">📅 </span>
                                <small>{date}</small>
                            </p>
                            <Container className="MarginTopBot">
                                        <img src={gifURL} alt="Devide World Tour GIF" style={{"width": "inherit"}}></img>
                                    
                                <Row>
                                    <Col>
                                        <h2 className="ContentDevide">
                                            <span role="img" aria-label="Globe">🌐 </span> 
                                            Deploy
                                        </h2>
                                        <ul>
                                            <li>
                                                <a href={deploy}>{deploy}</a>
                                            </li>
                                        </ul>
                                        <h2 className="ContentDevide">
                                            <span role="img" aria-label="Joystick">🕹️ </span>
                                             Technology
                                        </h2>

                                        <ul>
                                            {technology.map((el, index) => {
                                                return <li key={index}>{el}</li>
                                            })}
                                        </ul>
                                    </Col>
                                    <Col>
                                        <h2 className="ContentDevide">
                                            <span role="img" aria-label="Globe">📱 </span> 
                                            Responsive
                                        </h2>
                                        <ul>
                                            <li>
                                                <p>{responsive}</p>
                                            </li>
                                        </ul>
                                        <h2 className="ContentDevide"><i className="devicon-github-plain"></i> GitHub</h2>
                                        <ul>
                                            <li>
                                                <a href={github}>{github}</a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </Container>
            </div>
    );
}

export default Blog;
