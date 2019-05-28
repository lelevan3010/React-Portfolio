import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Banner() {
        return (        
                        <nav className="Background">
                                <ul>
                                        <li>
                                                <Link to="/">About</Link>
                                        </li>
                                        <li>
                                                <Link to="/skills/">skills</Link>
                                        </li>
                                        <li>
                                                <Link to="/projects/">Projects</Link>
                                        </li>   
                                </ul>
                        </nav>
        );
}

export default Banner;
