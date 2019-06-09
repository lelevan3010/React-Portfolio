import React from 'react';

import './styles.css';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import avatar from '../../Images/Avatar.png';

function About() {
  return (
    <Container>
      <Row className="VerticalAlign" noGutters={true}>
        <Col xs={12} sm={12} xl={4}>
          <img className="Avatar Center" src={avatar} alt="avatar"/>
        </Col>
        <Col xs={12} sm={12} xl={8}>
          <Container>
            <h2>CAREER SUMMARY<hr className="hr"/></h2>
            <p>
              Enthusiastic, self-taught IT student looking for a Web Development job. A social, energetic person and capable of working in a team to achieve the objectives. Possessing global mindset, I have huge passion in exploring new technologies that are being used behind tech companies in 2019 and develop my career in UI/UX design.
            </p>

            <h2 style={{"marginRight": "15rem"}}>LANGUAGES <hr className="hr"/></h2> 
            <p>
              Proficient in English and Vietnamese | Beginner in Finnish  
            </p>

            <h2 style={{"marginRight": "15rem"}}>EDUCATION<hr className="hr"/></h2>
            <p>
              Bachelor of Applied Science Metropolia UAS - IT(2017 – Present) 
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
