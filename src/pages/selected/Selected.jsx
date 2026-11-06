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
            const pageid = SearchParams.get("id");
            let match = response.data.find(title => title._id === pageid)
            setTitles(match)
            console.log(match)   
        };

        loadTitles();
    },[])


/*const findMatch = async () => {
    const match = titles.find(title => title._id === pageid)
    /*const tagClass = {
      Anime: "tag-anime",
      Manga: "tag-manga",
      "Light Novel": "tag-ln",
    }[match.type]
    console.log(match)
    if (match == undefined) {
        window.location.href = "index.html"
    } else {
        document.getElementById("detail-cover").src = match.coverfull;
        document.getElementById("detail-score-value").innerHTML = match.rating;
        document.getElementById("detail-title").innerHTML = match.name;
        document.getElementById("data-year").innerHTML = match.year;
        document.getElementById("data-count").innerHTML = match.count;
        document.getElementById("data-status").innerHTML = match.status;
        document.getElementById("data-genre").innerHTML = match.genre;
        document.getElementById("detail-description").innerHTML = match.description;
        document.getElementById("back-btn").innerHTML = `Back to ${match.type === "Light Novel" ? "Light Novels" : match.type}`;
        document.getElementById("back-btn").href = `${match.type === "Light Novel" ? "lightnovels" : (match.type).toLowerCase()}.html`
    }
    document.getElementById("detail-tag").classList.add(tagClass)
    document.getElementById("detail-tag").innerHTML = match.type;
}

    findMatch();*/


    return(
        <div>
            <NavLink to={'/anime'} id="back-btn" className="nav-link">Back to Anime</NavLink>
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