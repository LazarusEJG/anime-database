import "./DetailInfo.css"

const DetailInfo = (props) => {
    return (
    <div id="detail-info">
        <div id="detail-title-bar">
            <h1 id="detail-title">{props.title}</h1>
            <span class="tag tag-anime" id="detail-tag">{props.type}</span>
        </div>
        <div id="detail-data">
            <span id="data-year">{props.year}</span>
            <span class="data-extra"></span>
            <span id="data-count">{props.count}</span>
            <span class="data-extra"></span>
            <span id="data-status">{props.status}</span>
            <span class="data-extra"></span>
            <span id="data-genre">{props.genre}</span>
        </div>
        <div id="detail-description-wrap">
            <p class="section-label">Description</p>
            <p id="detail-description">{props.description}</p>
        </div>
    </div>
    )
}

export default DetailInfo