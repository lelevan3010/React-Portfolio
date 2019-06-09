import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import '../../App.css';
import Col from 'react-bootstrap/Col';

import Footer from '../Footer/index';
import BurgerMenu from '../BurgerMenu/index';

function Banner() {
        const [menuOpened, setMenuOpened] = useState(false);

        const onOpenMenu = () => {
                setMenuOpened(true);
        };

        const onCloseMenu = () => {
                setMenuOpened(false);
        }

        let collapseStyles = menuOpened ? {"transform": "translateX(0px)"} : null;
        
        return (        
                <div>
                        <BurgerMenu onOpenMenu={onOpenMenu}/>
                        <Col className="Height NoPadding" md={3} style={collapseStyles}>
                                <div className="X" onClick={onCloseMenu}>X</div>
                                <div className="Box">
                                        <Link to="/" style={{"paddingTop": "3em", "color": "rgb(255, 255, 255)", "textDecoration": "none"}}>
                                                <h1 style={{"textTransform": "uppercase", "fontWeight": "100"}}>Van <span style={{"fontWeight": "500"}}>Nguyen</span></h1>
                                        </Link>
                                        <nav>
                                                <ul className="UList">
                                                        <li>
                                                                <Link to="/"><span role="img" aria-label="Book">📖</span> About</Link>
                                                        </li>
                                                        <li>
                                                                <Link to="/skills/"><span role="img" aria-label="Pen">✒️</span>️ Skills</Link>
                                                        </li>
                                                        <li>
                                                                <Link to="/projects/"><span role="img" aria-label="Gear">⚙</span>️ Projects</Link>
                                                        </li>   
                                                </ul>
                                        </nav>
                                        <Footer/>
                                </div>
                        </Col>
                </div>
        );
}

export default Banner;
