import "../dbstatsaside/DBStatsAside.css"

const DBStatsBoxA = (props) => {
    return (
        <div className="stat-card violet-card">
                    <div className="stat-card-header">
                        <span className="stat-card-label">Anime</span>
                        <span className="stat-card-total violet" id="anime-stat">{props.animeStat}</span>
                    </div>
                    <div className="stat-card-rows">
                        <div className="stat-card-row">
                            <span>Completed</span>
                            <div className="bar-wrap">
                                <div className="bar violet-bar" id="anime-stat-c-bar" style={props.aCBarWidth}></div>
                            </div>
                            <span id="anime-stat-C">{props.animeStatC}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Watching</span>
                            <div className="bar-wrap">
                                <div className="bar violet-bar" id="anime-stat-w-bar" style={props.aWBarWidth}></div>
                            </div>
                            <span id="anime-stat-W">{props.animeStatW}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Plan to Watch</span>
                            <div className="bar-wrap">
                                <div className="bar violet-bar" id="anime-stat-p-bar" style={props.aPBarWidth}></div>
                            </div>
                            <span id="anime-stat-P">{props.animeStatP}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Dropped</span>
                            <div className="bar-wrap">
                                <div className="bar violet-bar" id="anime-stat-d-bar" style={props.aDBarWidth}></div>
                            </div>
                            <span id="anime-stat-D">{props.animeStatD}</span>
                        </div>
                    </div>
                </div>
    )
}

export default DBStatsBoxA;