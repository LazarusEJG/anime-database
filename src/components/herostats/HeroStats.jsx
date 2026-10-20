import "./HeroStats.css";

const HeroStats = () => {
    return (
        <div className="columns" id="stats-bar">
            <span id="stats-label">In database</span>
            <div id="stats-counts" className="columns">
                <span className="stat-item"><span id="ani-value" type="number">7</span> Anime</span>
                <span className="stat-divider"></span>
                <span className="stat-item"><span id="manga-value" type="number">2</span> Manga</span>
                <span className="stat-divider"></span>
                <span className="stat-item"><span id="ln-value" type="number">3</span> Light Novels</span>
            </div>
            <span id="stats-total"></span>
        </div>
    );
};

export default HeroStats;