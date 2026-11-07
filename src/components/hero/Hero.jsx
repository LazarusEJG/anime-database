import {motion, stagger} from "motion/react"
import HeroStats from "../herostats/HeroStats";
import "./Hero.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { delay } from "motion";

const Hero = () => {

    const [titles, setTitles] = useState([]);

    const loadTitles = async () => {
        let response = await axios.get("https://ejanidb-backend-1.onrender.com/api/titles");
        setTitles(response.data)
    };

    const [aValue, setAValue] = useState(0)

    const UpdateAnimeValue = async () => {
        const animeTitles = titles.filter(title => title.type === "Anime");
        setAValue(animeTitles.length)
    };

    const [mValue, setMValue] = useState(0)

    const UpdateMangaValue = async () => {
        const mangaTitles = titles.filter(title => title.type === "Manga");
        setMValue(mangaTitles.length)
    };

    const [lValue, setLValue] = useState(0)

    const UpdateLightNovelValue = async () => {
        const lightNovelTitles = titles.filter(title => title.type === "Light Novel");
        setLValue(lightNovelTitles.length)
    };

        useEffect(() => {
        loadTitles();
        UpdateAnimeValue();
        UpdateMangaValue();
        UpdateLightNovelValue();
    })

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren:0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.5}}
    }

    return (
        <section>
            <section id="hero-section">
                <img src="https://images.unsplash.com/photo-1617293134227-0ec282f3ed89?w=1400&h=600&fit=crop&auto=format"
                    alt="Night cityscape" />
                <div id="hero-overlay"></div>
                <motion.div className="columns" id="hero-content" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.p id="hero-label" variants={itemVariants}>Personal Collection</motion.p>
                    <motion.h1 id="hero-title" variants={itemVariants}>EJ's Anime<br/>Database</motion.h1>
                    <motion.p id="hero-sub" variants={itemVariants}>A curated personal log of anime, manga, and light novels — rated and ranked.</motion.p>
                </motion.div>
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