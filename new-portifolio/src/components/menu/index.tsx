import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/LogoVt.png';
import { FiMenu } from "react-icons/fi";
import './menu-style.css';

export default function Menu() {

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleClick = () => setMobileMenu(true);

    return (
        <div className="menu">
            <nav>
                <div className="content-top-web">
                    <div className="img-logo">
                        <Link to="/"><img src={logo} alt="logo_takedi" /></Link>
                    </div>
                    <div className="links-span">
                        <Link to="/"><span>Home</span></Link>
                        <Link to="/"><span>Sobre Mim</span></Link>
                        <Link to="/"><span>Skills</span></Link>
                        <Link to="/"><span>Contato</span></Link>
                    </div>
                    <div className="icons-menu">
                        {

                            <FiMenu color="#323232" size="2rem" />
                        }
                    </div>
                </div>
                <div className={mobileMenu === false ? "division-links-mobile-disable" : "division-links-mobile"}>
                    <div className="links-span-mobile">
                        <Link to="/"><span>Home</span></Link>
                        <Link to="/"><span>Sobre Mim</span></Link>
                        <Link to="/"><span>Skills</span></Link>
                        <Link to="/"><span>Contato</span></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}