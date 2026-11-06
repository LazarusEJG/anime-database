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
                setTitles(Titles);
            }

            UpdateResponse();
        };

        loadTitles();
    },[]);

    return (
        <section className="library-grid">
            {titles.map((title)=>(
            <LibraryCard
                name={title.name}
                status={title.status}
                rating={title.rating}
                cover={title.cover}
                year={title.year}
                count={title.count}
            />
            ))}
        </section>
    );
};

export default LibraryGrid