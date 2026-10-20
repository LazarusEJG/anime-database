import DBStatsBoxA from "../dbstatsboxa/DBStatsBoxA";
import DBStatsBoxL from "../dbstatsboxl/DBStatsBoxL";
import DBStatsBoxM from "../dbstatsboxm/DBStatsBoxM";
import "./DBStatsAside.css";

const DBStatsAside = () => {
    return (
        <aside id="db-stats" className="one">
                <p className="section-label">Database Stats</p>
                <DBStatsBoxA/>
                <DBStatsBoxM/>
                <DBStatsBoxL/>
            </aside>
    );
};

export default DBStatsAside;