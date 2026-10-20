import "../dbstatsaside/DBStatsAside.css"

const DBStatsBoxM = () => {
    return (
        <div className="stat-card sky-card">
                    <div className="stat-card-header">
                        <span className="stat-card-label">Manga</span>
                        <span className="stat-card-total sky" id="manga-stat"></span>
                    </div>
                    <div className="stat-card-rows">
                        <div className="stat-card-row">
                            <span>Completed</span>
                            <div className="bar-wrap">
                                <div className="bar sky-bar" id="manga-stat-c-bar"></div>
                            </div>
                            <span id="manga-stat-C"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Reading</span>
                            <div className="bar-wrap">
                                <div className="bar sky-bar" id="manga-stat-r-bar"></div>
                            </div>
                            <span id="manga-stat-R"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Plan to Read</span>
                            <div className="bar-wrap">
                                <div className="bar sky-bar" id="manga-stat-p-bar"></div>
                            </div>
                            <span id="manga-stat-P"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Dropped</span>
                            <div className="bar-wrap">
                                <div className="bar sky-bar" id="manga-stat-d-bar"></div>
                            </div>
                            <span id="manga-stat-D"></span>
                        </div>
                    </div>
                </div>
    )
}

export default DBStatsBoxM