import "./Navigation.css";
import { NavLink } from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = () => {
    return (
        <div>
            <nav className="columns" id="main-nav">
                <a href="index.html" className="columns" id="nav-logo-text">
                    <h2>EJ's ANIDB</h2>
                </a>
                <button id="nav-hamburger-btn" onClick={() => {
                        document.getElementById("icon-menu").classList.toggle("hidden")
                        document.getElementById("icon-close").classList.toggle("hidden")
                        document.getElementById("nav-mobile-menu").classList.toggle("hidden")}}>
                    <svg id="icon-menu" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" />
                    </svg>
                    <svg id="icon-close" width="18" height="18" viewBox="0 0 18 18" fill="none" className="hidden">
                        <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" />
                    </svg>
                </button>
                <ul className="columns" id="nav-links">
                    <li><NavLink to={'/'} className="nav-link">Home</NavLink></li>
                    <li><NavLink to={'/anime'} className="nav-link">Anime</NavLink></li>
                    <li><NavLink to={'/manga'} className="nav-link">Manga</NavLink></li>
                    <li><NavLink to={'/lightnovels'} className="nav-link">Light Novels</NavLink></li>
                    <li><NavLink to={'/aboutme'} className="nav-link">About Me</NavLink></li>
                </ul>
            </nav>
                <nav id="nav-mobile-menu" className="hidden">
                <ul>
                    <li><NavLink to={'/'} className="mobile-nav-link">Home</NavLink></li>
                    <li><NavLink to={'/anime'} className="mobile-nav-link">Anime</NavLink></li>
                    <li><NavLink to={'/manga'} className="mobile-nav-link">Manga</NavLink></li>
                    <li><NavLink to={'/lightnovels'} className="mobile-nav-link">Light Novels</NavLink></li>
                    <li><NavLink to={'/aboutme'} className="mobile-nav-link">About Me</NavLink></li>
                </ul>
                </nav>
        </div>
    );
};

export default Navigation;