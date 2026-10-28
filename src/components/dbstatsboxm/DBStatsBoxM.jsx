import "../dbstatsaside/DBStatsAside.css"

const DBStatsBoxM = (props) => {
    return (
        <div className="stat-card sky-card">
                    <div className="stat-card-header">
                        <span className="stat-card-label">Manga</span>
                        <span className="stat-card-total sky" id="manga-stat">{props.mangaStat}</span>
                    </div>
                    <div className="stat-card-rows">
                        <div className="stat-card-row">
                            <span>Completed</span>
                            <div className="bar-wrap">
                                <div className="bar sky-bar" id="manga-stat-c-bar" style={props.mCBarWidth}></div>
                            </div>
                            <span id="manga-stat-C">{props.mangaStatC}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Reading</span>
                            <div className="bar-wrap">
                                <div className="bar sky-bar" id="manga-stat-r-bar" style={props.mRBarWidth}></div>
                            </div>
                            <span id="manga-stat-R">{props.mangaStatR}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Plan to Read</span>
                            <div className="bar-wrap">
                                <div className="bar sky-bar" id="manga-stat-p-bar" style={props.mPBarWidth}></div>
                            </div>
                            <span id="manga-stat-P">{props.mangaStatP}</span>
                        </div>
                        <div className="stat-card-row">
                            <span>Dropped</span>
                            <div className="bar-wrap">
                                <div className="bar sky-bar" id="manga-stat-d-bar" style={props.mDBarWidth}></div>
                            </div>
                            <span id="manga-stat-D">{props.mangaStatD}</span>
                        </div>
                    </div>
                </div>
    )
}

export default DBStatsBoxM