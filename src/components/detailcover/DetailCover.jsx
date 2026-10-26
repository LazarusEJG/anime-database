import "./DetailCover.css"

const DetailCover = (props) => {
    return(
    <div id="detail-cover-wrap">
        <img src={props.coverfull} id="detail-cover"></img>
            <div id="detail-score-tag"><span>EJ score</span>
                <p id="detail-score-value">{props.rating}</p>
            </div>
    </div>
    )
}

export default DetailCover