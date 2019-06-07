import React from 'react';

import './styles.css'
import Row from 'react-bootstrap/Row';  

function GradientHeader(props) {
        return (
                <Row 
                        className="GradientHeader" 
                        noGutters={true} 
                        style={{"backgroundImage": `linear-gradient(rgba(23, 26, 30, 0) 45vh, rgb(23, 26, 30)), url(${props.imgURL})`}}>
                        {props.children}
                </Row>
        );
}

export default GradientHeader;
