import React from 'react';

import Col from 'react-bootstrap/Col';

function SkillIcon(props) {

    // achieve name dynamically from className provided by DEVICON
    // so this function finds the exact name from className
    // eg. className="devicon-react-original" ==> "react"
    const findIconName = (name) => {
        let skillName = '';
        let slicedName = name.slice(8);
        let found = slicedName.indexOf('-');
        skillName = [...slicedName].slice(0,found);
        return skillName;
    }

    return( 
        <Col>
            <div> 
                <i className={`${props.name} colored`} style={{"fontSize": "10rem"}}></i>
            </div>
            <h3>{findIconName(props.name)}</h3>
        </Col>
    )
}

export default SkillIcon;


