import "./Navigation.css";

const Navigation = () => {
    return (
        <div>
            <nav className="columns" id="main-nav">
                <a href="index.html" className="columns" id="logo-text">
                    <h2>EJ's ANIDB</h2>
                </a>
                <ul className="columns" id="nav-links">
                    <li><a href="index.html" className="nav-link active">Home</a></li>
                    <li><a href="#" className="nav-link">Anime</a></li>
                    <li><a href="#" className="nav-link">Manga</a></li>
                    <li><a href="#" className="nav-link">Light Novels</a></li>
                    <li><a href="#" className="nav-link">About Me</a></li>
                </ul>
                <button id="nav-hamburger-btn" onClick={() => {
                        document.getElementById("icon-menu").classList.toggle("hidden")
                        document.getElementById("icon-close").classList.toggle("hidden")
                        document.getElementById("mobile-menu").classList.toggle("hidden")
                }}>
                    <svg id="icon-menu" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" />
                    </svg>
                    <svg id="icon-close" width="18" height="18" viewBox="0 0 18 18" fill="none" className="hidden">
                        <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" />
                    </svg>
                </button>
            </nav>
                <nav id="nav-mobile-menu" className="hidden">
                <ul>
                    <li><a href="#" className="mobile-nav-link active">Home</a></li>
                    <li><a href="#" className="mobile-nav-link">Anime</a></li>
                    <li><a href="#" className="mobile-nav-link">Manga</a></li>
                    <li><a href="#" className="mobile-nav-link">Light Novels</a></li>
                    <li><a href="#" className="mobile-nav-link">About Me</a></li>
                </ul>
                </nav>
        </div>
    );
};

export default Navigation;