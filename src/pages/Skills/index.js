import React from 'react';
import SkillIcon from '../../components/SkillIcon/index';

import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const icons = [
    [{name:'devicon-react-original', percentage: '85'}, {name:'devicon-javascript-plain', percentage: '85'}, {name:'devicon-nodejs-plain', percentage: '80'}], 
    [{name:'devicon-webpack-plain', percentage: '70'}, {name:'devicon-jquery-plain', percentage: '70'}, {name:'devicon-babel-plain', percentage: '70'}], 
    [{name:'devicon-git-plain', percentage: '80'}, {name:'devicon-mongodb-plain', percentage: '65'}, {name:'devicon-html5-plain', percentage: '90'}], 
    [{name:'devicon-sass-original', percentage: '90'}, {name:'devicon-bootstrap-plain', percentage: '90'}, {name:'devicon-wordpress-plain', percentage: '90'}], 
    [{name:'devicon-python-plain', percentage: '60'}, {name:'devicon-cplusplus-plain', percentage: '75'}, {name:'devicon-csharp-plain', percentage: '75'}]
];

const showIcons = (icons) => {
    let result = null;
    if(icons.length > 0){
        result = icons.map((icon, index) => {
            return (
                <Row className="Icon" key={index}>
                    <SkillIcon name={icon[0].name} percentage={icon[0].percentage}/>
                    <SkillIcon name={icon[1].name} percentage={icon[1].percentage}/>
                    <SkillIcon name={icon[2].name} percentage={icon[2].percentage}/>
                </Row>
            );
        })
    };
    return result;
}
function Skills() {
        return (
            <Container>
                {showIcons(icons)}
            </Container>
        );
}

export default Skills;
