import "./DetailInfo.css"

const DetailInfo = (props) => {
    return (
    <div id="detail-info">
        <div id="detail-title-bar">
            <h1 id="detail-title">{props.name}</h1>
            <span className={`tag ${props.tag}`} id="detail-tag">{props.type}</span>
        </div>
        <div id="detail-data">
            <span id="data-year">{props.year}</span>
            <span className="data-extra"></span>
            <span id="data-count">{props.count}</span>
            <span className="data-extra"></span>
            <span id="data-status">{props.status}</span>
            <span className="data-extra"></span>
            <span id="data-genre">{props.genre}</span>
        </div>
        <div className={`detail-description-wrap ${props.hidden}`} id="trailer-box">
            <p className="section-label">Trailer</p>
            <iframe width="560" height="315" src={props.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div id="detail-description-wrap">
            <p className="section-label">Description</p>
            <p id="detail-description">{props.description}</p>
        </div>
    </div>
    )
}

export default DetailInfo