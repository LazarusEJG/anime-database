import Filterbar from "../../components/filterbar/Filterbar";
import LibraryGrid from "../../components/librarygrid/LibraryGrid";
import LirbaryHeader from "../../components/libraryheader/LibraryHeader";

const Manga = () => {
    return (
        <div>
            <LirbaryHeader
            label="Library"
            title="Manga"/>
            <Filterbar/>
            <LibraryGrid/>
        </div>
    );
};

export default Manga;