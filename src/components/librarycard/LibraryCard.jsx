import "./LibraryCard.css"

const LibraryCard = (props) => {
    return (
        <a className="library-card">
            <div className="card-cover-wrap">
                <img src={props.cover} alt={props.name} cover></img>
                <div className="card-score-overlay">
                    <span className="violet">{props.rating}</span>
                </div>
            <span className="card-status-tag">{props.status}</span>
            </div>
            <div className="card-info">
                <p>{props.name}</p>
                <small>{props.year} | {props.count}</small>
            </div>
        </a>
    )
}

export default LibraryCard;