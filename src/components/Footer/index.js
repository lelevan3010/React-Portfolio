import React from 'react';
import './styles.css'

function Footer() {
        return (
                <div>
                        <div className="IconBox">
                                <a href="https://github.com/lelevan3010" style={{"paddingRight": "1em"}}>
                                        <i className="fab fa-github SocialIcon"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/van-nguyen-090998/" style={{"paddingRight": "1em"}}>
                                        <i className="fab fa-linkedin SocialIcon"></i>
                                </a>
                        </div>
                        <p className="CopyRight">© 2019 Van Nguyen | Made with <span role="img" aria-label="Heart">💗</span> in Helsinki</p>
                </div>
        );
}

export default Footer;
