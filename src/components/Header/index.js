import React from 'react';

import './styles.scss'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';  

function Header(props) {
        return (
                <Row className="Header" noGutters={true}>
                        {props.children}
                </Row>
        );
}

export default Header;
