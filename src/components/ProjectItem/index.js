import React from 'react';

import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';
import './styles.css';

import { Link } from 'react-router-dom';

//function to tell webpack import all images from ProjectsImages folder
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../Images/ProjectsImages/', false, /\.(png|jpe?g|svg)$/));

export const projects = [
    [{
        title:'Devide World Tour',
        date: '10/8/2018',
        description: 'text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        deploy: 'http://ed-sheeran.surge.sh/',
        technology:['React', 'MaterialUI'],
        responsive: 'Desktop',
        github: 'https://github.com/lelevan3010/React-Devide-World-Tour',
        imgURL: images[0],
        gifURL: "https://66.media.tumblr.com/ba4dfe19ae8e6581b34b5f53d4ac2e9e/tumblr_prwni7yDGd1ynn6tyo1_640.gifv",
        route: '/devide-world-tour',
    },
    {
        title:'React Products Manager',
        date: '10/8/2018',
        description: 'text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        deploy: 'None',
        technology:['React', 'Redux', 'Bootstrap'],
        responsive: 'All Devices',
        github: 'https://github.com/lelevan3010/React-Products-Manager',
        imgURL: images[4],
        gifURL: 'https://66.media.tumblr.com/5844e2949efeece1bb06eda9bc6b46fd/tumblr_prwmfexNuv1ynn6tyo1_1280.gifv',
        route: '/products-manager',
    }],
    [{
        title:'God Of War',
        date: '12/3/2018',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        deploy: 'https://lelevan3010.github.io/God-of-War/',
        technology:['SASS', 'Gulp', 'ES6', 'Webpack'],
        responsive: 'All Devices',
        github: 'https://github.com/lelevan3010/God-of-War',
        imgURL: images[1],
        gifURL: 'https://66.media.tumblr.com/668fac1beb6492853687507a4d5a38c1/tumblr_prwnmiSdCt1ynn6tyo1_640.gifv',
        route: '/god-of-war',
    },
        {
        title:'To-Do App',
        date: '12/3/2018',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        deploy: 'https://van-nguyen-to-do-list.herokuapp.com/',
        technology:['HTML', 'CSS', 'EJS', 'MongoDB'],
        responsive: 'Desktop',
        github: 'https://github.com/lelevan3010/To-Do-List',
        imgURL: images[5],
        gifURL: 'https://66.media.tumblr.com/6b894afbb1e7cc9d9dd12483df1c5d65/tumblr_prwmty7RnF1ynn6tyo1_1280.gifv',
        route: '/to-do-app',
    }],
    [{
        title:'React Native Calculator',
        date: '10/8/2018',
        description: 'text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        deploy: null,
        technology:['React Native'],
        responsive: 'Mobile',
        github: 'https://github.com/lelevan3010/React-Native-Hello-World',
        imgURL: images[2],
        gifURL: 'https://66.media.tumblr.com/aee992c9ae1fdb6bec806bfb20c66ecb/tumblr_pq0rruEFIU1ynn6tyo1_1280.gifv',
        route: '/react-native-calculator',
    },
    {
        title:'React Contact Manager',
        date: '10/8/2018',
        description: 'text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        deploy: 'https://lelevan3010.github.io/React-Contact-Manager/',
        technology:['React', 'Redux', 'Bootstrap'],
        responsive: 'All Devices',
        github: 'https://github.com/lelevan3010/React-Contact-Manager',
        imgURL: images[3],
        gifURL: 'https://66.media.tumblr.com/478f51edf209aaa95506aa541e173b86/tumblr_prwmneU4Km1ynn6tyo1_1280.gifv',
        route: '/react-contact-manager',
    }]
];


const showContent = (projects) => {
    let result = null;
    if(projects.length > 0){
        result = projects.map((project, index) => {
            return (
                <Row key={index} noGutters={true} >
                    <Col className="Cover NoPadding"
                    style={{'backgroundImage': `url(${project[0].imgURL})`}}
                    >
                        <Link to={`${project[0].route}`} className="TextDecorate">
                            <section className="GradientBackgroundTitle">
                                <h2>
                                    {project[0].title}
                                </h2>
                                <p>
                                    📅 {project[0].date}
                                </p>
                                <p>
                                    {project[0].description}
                                </p>
                            </section>
                        </Link>
                    </Col>
                    <Col className="Cover NoPadding"
                    style={{'backgroundImage': `url(${project[1].imgURL})`}}
                    >
                        <Link to={`${project[1].route}`} className="TextDecorate">
                            <section className="GradientBackgroundTitle">
                                <h2>
                                    {project[1].title}
                                </h2>
                                <p>
                                    📅 {project[1].date}
                                </p>
                                <p>
                                    {project[1].description}
                                </p>
                            </section>
                        </Link>
                    </Col>
                </Row>
            );
        })
    };
    return result;
}
function ProjectItemLeft() {
    return (
        <div>
            {showContent(projects)}
        </div>
    );
}


export default ProjectItemLeft;
