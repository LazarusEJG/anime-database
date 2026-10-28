import "../dbstatsaside/DBStatsAside.css"

const DBStatsBoxL = (props) => {
    return (
                <div className="stat-card emerald-card">
                    <div className="stat-card-header">
                        <span className="stat-card-label">Light Novels</span>
                        <span className="stat-card-total emerald" id="lightnovel-stat">{props.lightNovelStat}</span>
                    </div>
                    <div className="stat-card-rows">
                        <div className="stat-card-row">
                            <span>Completed</span>
                            <div className="bar-wrap">
                                <div className="bar emerald-bar" id="lightnovel-stat-c-bar" style={props.lCBarWidth}></div>
                            </div>
                            <span id="lightnovel-stat-C">{props.lightNovelStatC}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Reading</span>
                            <div className="bar-wrap">
                                <div className="bar emerald-bar" id="lightnovel-stat-r-bar" style={props.lRBarWidth}></div>
                            </div>
                            <span id="lightnovel-stat-R">{props.lightNovelStatR}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Plan to Read</span>
                            <div className="bar-wrap">
                                <div className="bar emerald-bar" id="lightnovel-stat-p-bar" style={props.lPBarWidth}></div>
                            </div>
                            <span id="lightnovel-stat-P">{props.lightNovelStatP}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Dropped</span>
                            <div className="bar-wrap">
                                <div className="bar emerald-bar" id="lightnovel-stat-d-bar" style={props.lDBarWidth}></div>
                            </div>
                            <span id="lightnovel-stat-D">{props.lightNovelStatD}</span>
                        </div>
                    </div>
                </div>
    )
}

export default DBStatsBoxL