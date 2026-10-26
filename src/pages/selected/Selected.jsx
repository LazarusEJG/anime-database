import { NavLink } from "react-router-dom"
import DetailCard from "../../components/detailcard/DetailCard"
import "./Selected.css"

const Selected = () => {
    return(
        <div>
            <NavLink to={'/anime'} id="back-btn" className="nav-link">Back to Anime</NavLink>
            <DetailCard/>
        </div>
    )
}

export default Selected