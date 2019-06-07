import React, { useState } from 'react';
import Blog from '../../components/Blog/index';
import { projects } from '../../components/ProjectItem/index';


//function return Object which contains info of specific blog
const identifier=(component)=>{
        let result=null;
        projects.forEach((project, _index)=>{
                project.forEach(element => {
                        console.log(element)
                        if(element.title === component){
                                result = element;
                        }
                });
        });
        return result;
}

export function DevideWorldTour() {
        // Declare a new state variable, which we'll call "component"
        const [component] = useState('Devide World Tour');

        const blogInfo = identifier(component);
        let {title, date, deploy, technology, responsive, github, gifURL, imgURL} = blogInfo;
        return (
                <div>
                        <Blog 
                                title={title}
                                date={date}
                                deploy={deploy}
                                technology={technology}
                                responsive={responsive}
                                github={github}
                                gifURL={gifURL}
                                imgURL={imgURL}/>
                </div>
        );
}

export function ReactProductsManager() {
        const [component] = useState('React Products Manager');

        const blogInfo = identifier(component);
        let {title, date, deploy, technology, responsive, github, gifURL, imgURL} = blogInfo;
        return (
                <div>
                        <Blog 
                                title={title}
                                date={date}
                                deploy={deploy}
                                technology={technology}
                                responsive={responsive}
                                github={github}
                                gifURL={gifURL}
                                imgURL={imgURL}/>
                </div>
        );
}

export function ReactContactManager() {
        const [component] = useState('React Contact Manager');

        const blogInfo = identifier(component);
        let {title, date, deploy, technology, responsive, github, gifURL, imgURL} = blogInfo;
        return (
                <div>
                        <Blog 
                                title={title}
                                date={date}
                                deploy={deploy}
                                technology={technology}
                                responsive={responsive}
                                github={github}
                                gifURL={gifURL}
                                imgURL={imgURL}/>
                </div>
        );
}

export function ToDoApp() {
        const [component] = useState('To-Do App');

        const blogInfo = identifier(component);
        let {title, date, deploy, technology, responsive, github, gifURL, imgURL} = blogInfo;
        return (
                <div>
                        <Blog 
                                title={title}
                                date={date}
                                deploy={deploy}
                                technology={technology}
                                responsive={responsive}
                                github={github}
                                gifURL={gifURL}
                                imgURL={imgURL}/>
                </div>
        );
}

export function GodOfWar() {
        const [component] = useState('God Of War');

        const blogInfo = identifier(component);
        let {title, date, deploy, technology, responsive, github, gifURL, imgURL} = blogInfo;
        return (
                <div>
                        <Blog 
                                title={title}
                                date={date}
                                deploy={deploy}
                                technology={technology}
                                responsive={responsive}
                                github={github}
                                gifURL={gifURL}
                                imgURL={imgURL}/>
                </div>
        );
}

export function ReactNativeCalculator() {
        const [component] = useState('React Native Calculator');

        const blogInfo = identifier(component);
        let {title, date, deploy, technology, responsive, github, gifURL, imgURL} = blogInfo;
        return (
                <div>
                        <Blog 
                                title={title}
                                date={date}
                                deploy={deploy}
                                technology={technology}
                                responsive={responsive}
                                github={github}
                                gifURL={gifURL}
                                imgURL={imgURL}/>
                </div>
        );
}


