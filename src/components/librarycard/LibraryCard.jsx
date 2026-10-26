import { NavLink } from "react-router-dom";
import "./LibraryCard.css"

const LibraryCard = (props) => {
    return (
        <NavLink to={'/selected'} className="library-card nav-link">
            <div className="card-cover-wrap">
                <img src={props.cover} alt={props.name} cover></img>
                <div className="card-score-overlay">
                    <span className="violet">{props.rating}</span>
                </div>
            <span className={`card-status-tag ${props.status === "Reading" || props.status === "Watching" ? "in-progress" : null}`}>{props.status}</span>
            </div>
            <div className="card-info">
                <p>{props.name}</p>
                <small>{props.year} | {props.count}</small>
            </div>
        </NavLink>
    )
}

export default LibraryCard;