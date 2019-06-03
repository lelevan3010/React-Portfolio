import React from 'react';

import './styles.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';  

function Header() {
        return (
                <Row className="Header" noGutters={true}>
                        <section className="GradientBackgroundTitle">
                                <h1>My Projects</h1>
                        </section>
                </Row>
        );
}

export default Header;
