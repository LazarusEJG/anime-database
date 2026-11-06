import DetailCover from "../detailcover/DetailCover"
import DetailInfo from "../detailinfo/DetailInfo"
import "./DetailCard.css"

const DetailCard = (props) => {
    return(
        <article id="detail-card">
            <DetailCover
            coverfull={props.coverfull}
            rating={props.rating}
            />
            <DetailInfo
                name={props.name}
                status={props.status}
                year={props.year}
                count={props.count}
                type={props.type}
                genre={props.genre}
                description={props.description}
                trailer={props.trailer}
            />
        </article>
    )
}

export default DetailCard