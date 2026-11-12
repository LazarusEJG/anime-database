import TopPicksCard from "../toppickscard/TopPicksCard"
import "./TopPicks.css"
import { useState, useEffect } from "react";
import axios from "axios";

const TopPicks = () => {

    const [pending, setPending] = useState(true);
    const [titles, setTitles] = useState([]);
    const topPickIds = [
      "vivy-flourite-eyes-song",
      "so-im-a-spider-so-what",
      "bleach-tybw",
      "tensura",
      "bleach",
      "berserk",
      "fullmetal-alchemist-brotherhood",
      "attack-on-titian",
      "steins-gate",
      "vinland-saga",
  ];
    
    useEffect(()=>{
        const loadTitles = async () => {
            let response = await axios.get("https://ejanidb-backend-1.onrender.com/api/titles");
            let results = []
            topPickIds.forEach((_id,index) => {
              const match = response.data.find(title => title._id === _id)
              match.rank = index + 1
              results.push(match)
            })
            setTitles(results)
            setPending(false)
        };

        loadTitles();
    },[])
  
    return (
          <section id="top-picks" className="three">
            <p className="section-label">EJ's Top Picks</p>
            <div id="picks-table">
              <div className="picks-row picks-header">
                <span className="col-rank">#</span>
                <span className="col-thumb"></span>
                <span className="col-title">Title</span>
                <span className="col-type desktop-only">Type</span>
                <span className="col-score desktop-only">Score</span>
                <span className="col-status desktop-only">Status</span>
              </div>
              {pending && <p  className="section-label-center">Loading titles....</p>}
              {titles.map((title)=>(
              <TopPicksCard
              rank={title.rank}
              name={title.name}
              cover={title.cover}
              count={title.count}
              year={title.year}
              id={title._id}
              type={title.type}
              status={title.status}
              rating={title.rating}
              />
              ))}
            </div>
          </section>
    )
}

export default TopPicks