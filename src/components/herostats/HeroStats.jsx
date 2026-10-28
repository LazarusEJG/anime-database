import "./HeroStats.css";

const HeroStats = (props) => {
    return (
        <div className="columns" id="stats-bar">
            <span id="stats-label">In database</span>
            <div id="stats-counts" className="columns">
                <span className="stat-item"><span id="ani-value" type="number">{props.aTotal}</span> Anime</span>
                <span className="stat-divider"></span>
                <span className="stat-item"><span id="manga-value" type="number">{props.mTotal}</span> Manga</span>
                <span className="stat-divider"></span>
                <span className="stat-item"><span id="ln-value" type="number">{props.lnTotal}</span> Light Novels</span>
            </div>
            <span id="stats-total">{props.total} total</span>
        </div>
    );
};

export default HeroStats;