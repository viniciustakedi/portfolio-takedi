import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/LogoVt.png';
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import './menu-style.css';

export default function Menu() {

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleClick = () => setMobileMenu(true);
    const handleClose = () => setMobileMenu(false);

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
                            mobileMenu === true ?
                                <IoCloseOutline id="icon-menu" color="#323232" size="2rem" onClick={handleClose} />
                                :
                                <IoMenuOutline id="icon-menu" color="#323232" size="2rem" onClick={handleClick} />
                        }
                    </div>
                </div>
                <div className={mobileMenu === false ? "division-links-mobile-disable" : "division-links-mobile"}>
                    <div className="links-span-mobile">
                        <p>Menu</p>
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