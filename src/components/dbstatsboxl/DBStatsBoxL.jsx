import "../dbstatsaside/DBStatsAside.css"

const DBStatsBoxL = () => {
    return (
                <div className="stat-card emerald-card">
                    <div className="stat-card-header">
                        <span className="stat-card-label">Light Novels</span>
                        <span className="stat-card-total emerald" id="lightnovel-stat">3</span>
                    </div>
                    <div className="stat-card-rows">
                        <div className="stat-card-row">
                            <span>Completed</span>
                            <div className="bar-wrap">
                                <div className="bar emerald-bar" id="lightnovel-stat-c-bar"></div>
                            </div>
                            <span id="lightnovel-stat-C"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Reading</span>
                            <div className="bar-wrap">
                                <div className="bar emerald-bar" id="lightnovel-stat-r-bar"></div>
                            </div>
                            <span id="lightnovel-stat-R"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Plan to Read</span>
                            <div className="bar-wrap">
                                <div className="bar emerald-bar" id="lightnovel-stat-p-bar"></div>
                            </div>
                            <span id="lightnovel-stat-P"></span>
                        </div>
                        <div className="stat-card-row">
                            <span>Dropped</span>
                            <div className="bar-wrap">
                                <div className="bar emerald-bar" id="lightnovel-stat-d-bar"></div>
                            </div>
                            <span id="lightnovel-stat-D"></span>
                        </div>
                    </div>
                </div>
    )
}

export default DBStatsBoxL