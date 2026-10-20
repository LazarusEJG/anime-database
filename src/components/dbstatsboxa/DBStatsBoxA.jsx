import "../dbstatsaside/DBStatsAside.css"

const DBStatsBoxA = () => {
    return (
        <div className="stat-card violet-card">
                    <div className="stat-card-header">
                        <span className="stat-card-label">Anime</span>
                        <span className="stat-card-total violet" id="anime-stat"></span>
                    </div>
                    <div className="stat-card-rows">
                        <div className="stat-card-row">
                            <span>Completed</span>
                            <div className="bar-wrap">
                                <div className="bar violet-bar" id="anime-stat-c-bar"></div>
                            </div>
                            <span id="anime-stat-C"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Watching</span>
                            <div className="bar-wrap">
                                <div className="bar violet-bar" id="anime-stat-w-bar"></div>
                            </div>
                            <span id="anime-stat-W"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Plan to Watch</span>
                            <div className="bar-wrap">
                                <div className="bar violet-bar" id="anime-stat-p-bar"></div>
                            </div>
                            <span id="anime-stat-P"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Dropped</span>
                            <div className="bar-wrap">
                                <div className="bar violet-bar" id="anime-stat-d-bar"></div>
                            </div>
                            <span id="anime-stat-D"></span>
                        </div>
                    </div>
                </div>
    )
}

export default DBStatsBoxA;