import React from 'react';
import SkillIcon from '../../components/SkillIcon/index';

import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const name = [
        ['devicon-react-original', 'devicon-javascript-plain', 'devicon-nodejs-plain'], 
        ['devicon-webpack-plain', 'devicon-babel-plain', 'devicon-jquery-plain'], 
        ['devicon-git-plain', 'devicon-mongodb-plain', 'devicon-html5-plain'], 
        ['devicon-sass-original', 'devicon-bootstrap-plain', 'devicon-wordpress-plain'],
        ['devicon-python-plain','devicon-cplusplus-plain','devicon-csharp-plain']
];

const showIcons = (name) => {
    let result = null;
    if(name.length > 0){
        result = name.map((name, index) => {
            return (
                <Row key={index} noGutters={true}  className="Icon">
                    <SkillIcon name={name[0]}/>
                    <SkillIcon name={name[1]}/>
                    <SkillIcon name={name[2]}/>  
                </Row>
            );
        })
    };
    return result;
}
function Skills() {
        return (
            <Container>
                {showIcons(name)}
            </Container>
        );
}

export default Skills;
