import React from 'react';

import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';

//function to tell webpack import all images from ProjectsImages folder
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../Images/ProjectsImages/', false, /\.(png|jpe?g|svg)$/));

console.log(images)
const projects = [
    {
        title:'To-Do App',
        date: '12/3/2018',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        imgURL: images[5]
    },
    {
        title:'React Native Calculator',
        date: '10/8/2018',
        description: 'text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        imgURL: images[2]
    },
    {
        title:'React Contact Manager',
        date: '10/8/2018',
        description: 'text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        imgURL: images[3]
    }
]

const showContent = (projects) => {
    let result = null;
    if(projects.length > 0){
        result = projects.map((project, index) => {
            return (
                <Row key={index} className="Cover NoPadding NoMargin" 
                style={{'backgroundImage': `url(${project.imgURL})`}}
                >
                    <section className="GradientBackgroundTitle">
                        <h2>
                            {project.title}
                        </h2>
                        <p>
                            📅 {project.date}
                        </p>
                        <p>
                            {project.description}
                        </p>
                    </section>
                </Row>
            );
        })
    };
    return result;
}
function ProjectItemRight() {
    return (
        <div>
            {showContent(projects)}
        </div>
    );
}


export default ProjectItemRight;
