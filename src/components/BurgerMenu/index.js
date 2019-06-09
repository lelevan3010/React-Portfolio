import React from 'react';

import BurgerMenuPNG from '../../Images/SkillsImages/BurgerMenu.png';

import './styles.css';

function BurgerMenu(props) {
        return (
                <div className="TopBar">
                    <img onClick={props.onOpenMenu} className="BurgerMenu" src={BurgerMenuPNG} alt="burer-menu"/>
                </div>
        );
}

export default BurgerMenu;
