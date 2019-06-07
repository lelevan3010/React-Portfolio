import React from 'react';
import GradientHeader from '../../components/GradientHeader/index';

import Badge from 'react-bootstrap/Badge';
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
                            <p>📅<small>{date}</small></p>
                            <Container className="PaddingSide MarginTopBot">
                                <Row>
                                    <Col>
                                        <img src={gifURL} alt="Devide World Tour GIF" style={{"width": "inherit"}}></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h2 className="ContentDevide">🌐 Deploy</h2>
                                        <ul className="UList">
                                            <li>
                                                <a href={deploy}>{deploy}</a>
                                            </li>
                                        </ul>
                                        <h2 className="ContentDevide">🕹️ Technology</h2>

                                        <ul>
                                            {technology.map((el, index) => {
                                                return <li>{el}</li>
                                            })}
                                        </ul>
                                    </Col>
                                    <Col>
                                        <h2 className="ContentDevide">📱 Responsive</h2>
                                        <ul>
                                            <li>
                                                <p>{responsive}</p>
                                            </li>
                                        </ul>
                                        <h2 className="ContentDevide"><i class="devicon-github-plain"></i> GitHub</h2>
                                        <ul className="UList">
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
