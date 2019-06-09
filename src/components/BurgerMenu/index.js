import React from 'react';

import BurgerMenuPNG from '../../Images/SkillsImages/BurgerMenu.png';

import './styles.css';

function BurgerMenu() {
        return (
                <div className="TopBar">
                    <img className="BurgerMenu" src={BurgerMenuPNG} alt="burer-menu"/>
                </div>
        );
}

export default BurgerMenu;
