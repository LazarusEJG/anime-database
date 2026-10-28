import HeroStats from "../herostats/HeroStats";
import "./Hero.css";
import { useState, useEffect } from "react";

const Hero = () => {
    const base_url = "https://lazarusejg.github.io/csce242/projects/07parsing-and-contact/json/titles.json";

    const GetTitles = async () => {
        const response = await fetch(base_url);
        return response.json();
    };

    const [aValue, setAValue] = useState(0)

    const UpdateAnimeValue = async () => {
        const titles = await GetTitles();
        const animeTitles = titles.filter(title => title.type === "Anime");
        setAValue(animeTitles.length)
    };

    const [mValue, setMValue] = useState(0)

    const UpdateMangaValue = async () => {
        const titles = await GetTitles();
        const mangaTitles = titles.filter(title => title.type === "Manga");
        setMValue(mangaTitles.length)
    };

    const [lValue, setLValue] = useState(0)

    const UpdateLightNovelValue = async () => {
        const titles = await GetTitles();
        const lightNovelTitles = titles.filter(title => title.type === "Light Novel");
        setLValue(lightNovelTitles.length)
    };

    function ValueUpdate(){
        useEffect(() => {
        UpdateAnimeValue();
        UpdateMangaValue();
        UpdateLightNovelValue();
    })}

    ValueUpdate();

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
            <HeroStats
            aTotal={aValue}
            mTotal={mValue}
            lnTotal={lValue}
            total={aValue+mValue+lValue}
            />
        </section>
    );
};

export default Hero;