import LibraryCard from "../librarycard/LibraryCard";
import "./LibraryGrid.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";

const LibraryGrid = (props) => {

    const [titles, setTitles] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(()=>{
        const loadTitles = async () => {
            const response = await axios.get(`${API_BASE_URL}/api/titles`);

            const UpdateResponse = async () => {
                const Titles = response.data.filter(title => title.type === `${props.page}`);
                setPending(false)
                setTitles(Titles)
            }

            UpdateResponse();

        };

        loadTitles();
    },[]);

    return (
        <section className="library-grid">
            {pending && <p>Loading titles....</p>}
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