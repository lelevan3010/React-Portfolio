import React from 'react';

import Col from 'react-bootstrap/Col';

function SkillIcon(props) {
    return( 
        <Col>
            <div>
                <i className={`fab fa-${props.name} fa-10x`}></i>
            </div>
            <h3>{props.name !== 'react' ? props.name : 'react/react-native/redux'}</h3>
        </Col>
    )
}

export default SkillIcon;


