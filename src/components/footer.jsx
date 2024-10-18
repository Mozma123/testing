
import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Moazma Developer</h3>
                <p>
                A dedicated and creative web developer, crafting responsive and user-friendly websites with a passion for coding and problem-solving.
                </p>
                <div className="footer-icons">
                    <a href="https://leetcode.com/u/Moazma/" target="_blank" rel="noopener noreferrer" className="icon leetcode">
                        <FaCode />
                    </a>
                    <a href="https://github.com/Mozma123" target="_blank" rel="noopener noreferrer" className="icon github">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/moazma-amin-7573b72b4/" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;