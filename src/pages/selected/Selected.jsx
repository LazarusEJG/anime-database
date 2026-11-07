import { NavLink, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import DetailCard from "../../components/detailcard/DetailCard"
import "./Selected.css"

const Selected = () => {
    const [titles, setTitles] = useState([]);
    const [SearchParams] = useSearchParams();
    
    useEffect(()=>{
        const loadTitles = async () => {
            let response = await axios.get("https://ejanidb-backend-1.onrender.com/api/titles");
            const pageid = (SearchParams.get("id"))
            let match = response.data.find(title => title._id === pageid)
            setTitles(match)  
        };

        loadTitles();
    },[])


    return(
        <div>
            <NavLink to={titles.type === "Anime" ? "/anime" : titles.type === "Manga" ? "/manga" : "/lightnovels"} id="back-btn" className="nav-link">Back to {titles.type === "Light Novel" ? "Light Novels" : titles.type}</NavLink>
            <DetailCard
            coverfull={titles.coverfull}
            rating={titles.rating}
            name={titles.name}
            status={titles.status}
            year={titles.year}
            count={titles.count}
            type={titles.type}
            genre={titles.genre}
            description={titles.description}
            trailer={titles.trailer}
            />
        </div>
    )
}

export default Selected