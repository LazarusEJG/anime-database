import { NavLink } from "react-router-dom";
import "../toppicks/TopPicks.css"
import { isMobile } from "react-device-detect";

const TopPicksCard = (props) => {
  const tagClass = {
    Anime: "tag-anime",
    Manga: "tag-manga",
    "Light Novel": "tag-ln",
  }[props.type];

    return (
        <NavLink to={'/selected'} className={`picks-row entry-row nav-link ${props.rank % 2 === 0 ? "odd" : "even"}`}>
            <span className="col-rank">{props.rank}</span>
            <span className="col-thumb">
                <img src={props.cover} alt={props.name} cover></img>
            </span>
            <span className="col-title">
                <p>{props.name}</p>
                <small>{props.count} | {props.year}</small>
            </span>
            <span className="col-type desktop-only">
                <span className={`tag ${tagClass}`}>{props.type}</span>
            </span>
            <span className={`${isMobile ? "col-score-mobile" : "col-score"}`}>{props.rating}</span>
            <span className={`col-status desktop-only ${props.status === "Reading" || props.status === "Watching" ? "in-progress" : null}`}>{props.status}</span>
        </NavLink>
    );
}

export default TopPicksCard