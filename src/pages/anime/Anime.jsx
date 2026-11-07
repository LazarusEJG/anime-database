import { useState } from "react";
import Filterbar from "../../components/filterbar/Filterbar";
import LibraryGrid from "../../components/librarygrid/LibraryGrid";
import LirbaryHeader from "../../components/libraryheader/LibraryHeader";

const Anime = () => {
    const [filter, setFilter] = useState("All");

    return (
        <div>
            <LirbaryHeader
            label="Library"
            title="Anime"/>
            <Filterbar
            filter={filter}
            filterChange={setFilter}
            watchOrRead="Watch"
            watchingReading="Watching"
            />
            <LibraryGrid
            page="Anime"
            filter={filter}
            />
        </div>
    );
};

export default Anime;