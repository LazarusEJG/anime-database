import TopPicksCard from "../toppickscard/TopPicksCard"
import "./TopPicks.css"
import vivyThumb from "../../images/vivy-thumb.png"
import tybw from "../../images/bleachtybw-thumb.png";
import fmaB from "../../images/fmabrotherhood-thumb.png";

const TopPicks = () => {
    return (
          <section id="top-picks" className="three">
            <p className="section-label">EJ's Top Picks</p>
            <div id="picks-table">
              <div className="picks-row picks-header">
                <span className="col-rank">#</span>
                <span className="col-thumb"></span>
                <span className="col-title">Title</span>
                <span className="col-type desktop-only">Type</span>
                <span className="col-score desktop-only">Score</span>
                <span className="col-status desktop-only">Status</span>
              </div>
                <TopPicksCard
                rank="1"
                name="Vivy -Flourite Eye's Song"
                status="Completed"
                rating="10.0"
                cover={vivyThumb}
                year="2021"
                count="13 ep"
                type="Anime"
                />
                <TopPicksCard
                rank="2"
                name="Bleach: Thousand Year Blood War"
                status="Completed"
                rating="10.0"
                cover={tybw}
                year="2022"
                count="50 ep"
                type="Anime"
                />
                <TopPicksCard
                rank="3"
                name="Fullmetal Alchemist: Brotherhood"
                status="Completed"
                rating="9.5"
                cover={fmaB}
                year="2009"
                count="64 ep"
                type="Anime"
                />
            </div>
          </section>
    )
}

export default TopPicks