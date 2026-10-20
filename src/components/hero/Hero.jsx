import HeroStats from "../herostats/HeroStats";
import "./Hero.css";

const Hero = () => {
    return (
        <section>
            <section id="hero-section">
                <img src="https://images.unsplash.com/photo-1617293134227-0ec282f3ed89?w=1400&h=600&fit=crop&auto=format"
                    alt="Night cityscape" />
                <div id="hero-overlay"></div>
                <div className="columns" id="hero-content">
                    <p id="hero-label">Personal Collection</p>
                    <h1 id="hero-title">EJ's Anime<br/>Database</h1>
                    <p id="hero-sub">A curated personal log of anime, manga, and light novels — rated and ranked.</p>
                </div>
            </section>
            <HeroStats/>
        </section>
    );
};

export default Hero;