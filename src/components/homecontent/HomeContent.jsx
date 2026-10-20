import DBStatsAside from "../dbstatsaside/DBStatsAside";
import TopPicks from "../toppicks/TopPicks";
import "./HomeContent.css";

const HomeContent = () => {
    return (
        <main className="page-content columns" id="page-home">
            <DBStatsAside/>
            <TopPicks/>
        </main>
    );
};

export default HomeContent;