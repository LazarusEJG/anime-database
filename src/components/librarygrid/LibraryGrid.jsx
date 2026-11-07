import LibraryCard from "../librarycard/LibraryCard";
import "./LibraryGrid.css";
import { useState, useEffect } from "react";
import axios from "axios";

const LibraryGrid = (props) => {

    const [titles, setTitles] = useState([]);

    useEffect(()=>{
        const loadTitles = async () => {
            const response = await axios.get("https://ejanidb-backend-1.onrender.com/api/titles");

            const UpdateResponse = async () => {
                const Titles = response.data.filter(title => title.type === `${props.page}`);
                setTitles(Titles)
            }

            UpdateResponse();
        };

        loadTitles();
    },[]);

    return (
        <section className="library-grid">
            {titles.filter(title => props.filter === "All" ? title.status : props.filter === "Completed" ? title.status === "Completed" : props.filter === "Watching" || props.filter === "Reading" ? title.status === "Watching" || title.status === "Reading" : props.filter === "Plan to Watch" || props.filter === "Plan to Read" ? title.status === "Plan to Watch" || title.status === "Plan to Read" : title.status === "Dropped" )
                .map((title)=>(
            <LibraryCard
                name={title.name}
                status={title.status}
                rating={title.rating}
                cover={title.cover}
                year={title.year}
                count={title.count}
                id={title._id}
            />
            ))}
        </section>
    );
};

export default LibraryGrid