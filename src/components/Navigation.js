import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    const handleLogoClick = () => {
        navigate("/Accueil");
    };

    const getLinkStyle = (path) => {
        if (location.pathname === '/Apropos') {
            if (path === '/Accueil' || path === '/Contact' || path === '/Apropos') {
                return { color: '#39375B' };
            }
        }
        return { color: '#FFD700' }; // jaune
    };

    // Ajoutez cette fonction pour obtenir la classe conditionnelle pour le navbar_burger
    const getBurgerClass = () => {
        return location.pathname === '/Apropos' ? 'navbar__burger red' : 'navbar__burger';
    };

    return (
        <div className={`navigation ${showLinks ? "show-nav" : "hide-nav"}`}>
            <NavLink to="/Accueil" className={`navbar__logo ${location.pathname === '/Apropos' ? 'orange-logo' : 'blue-logo'}`} onClick={handleLogoClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brain" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={location.pathname === '/Apropos' ? '#39375b' : '#ffb703'} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
                    <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
                    <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
                    <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
                    <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
                    <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
                </svg> / Autodit.React
            </NavLink>
            <ul className="navbar__links">
                <li className={`navbar__item ${location.pathname === '/Accueil' ? 'active' : ''}`} style={getLinkStyle('/Accueil')}>
                    <NavLink to="/Accueil">Accueil</NavLink>
                </li>
                <li className={`navbar__item ${location.pathname === '/Contact' ? 'active' : ''}`} style={getLinkStyle('/Contact')}>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
             
                <li className={`navbar__item ${location.pathname === '/Apropos' ? 'active' : ''}`} style={getLinkStyle('/Apropos')}>
                    <NavLink to="/Apropos">À propos</NavLink>
                </li>
            </ul>
            <button className={getBurgerClass()} onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </div>
    );
};

export default Navigation;