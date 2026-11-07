import Filterbar from "../../components/filterbar/Filterbar";
import LibraryGrid from "../../components/librarygrid/LibraryGrid";
import LirbaryHeader from "../../components/libraryheader/LibraryHeader";
import { useState } from "react";

const Manga = () => {
    const [filter, setFilter] = useState("All");

    return (
        <div>
            <LirbaryHeader
            label="Library"
            title="Manga"/>
            <Filterbar
            filter={filter}
            filterChange={setFilter}
            watchOrRead="Read"
            watchingReading="Reading"
            />
            <LibraryGrid
            page="Manga"
            filter={filter}
            />
        </div>
    );
};

export default Manga;