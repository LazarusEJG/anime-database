import Filterbar from "../../components/filterbar/Filterbar";
import LibraryGrid from "../../components/librarygrid/LibraryGrid";
import LirbaryHeader from "../../components/libraryheader/LibraryHeader";
import { useState } from "react";

const Lightnovels = () => {
    const [filter, setFilter] = useState("All");

    return (
        <div>
            <LirbaryHeader
            label="Library"
            title="Light Novels"/>
            <Filterbar
            filter={filter}
            filterChange={setFilter}
            watchOrRead="Read"
            watchingReading="Reading"
            />
            <LibraryGrid
            page="Light Novel"
            filter={filter}
            />
        </div>
    );
};

export default Lightnovels;