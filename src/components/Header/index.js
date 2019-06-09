import React from 'react';

import './styles.scss'
import Row from 'react-bootstrap/Row';  

function Header(props) {
        return (
                <Row className="Header" noGutters={true} style={{"backgroundImage": `url(${props.imgURL})`}}>
                        {props.children}
                </Row>
        );
}

export default Header;
