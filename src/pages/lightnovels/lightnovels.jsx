import Filterbar from "../../components/filterbar/Filterbar";
import LibraryGrid from "../../components/librarygrid/LibraryGrid";
import LirbaryHeader from "../../components/libraryheader/LibraryHeader";

const Lightnovels = () => {
    return (
        <div>
            <LirbaryHeader
            label="Library"
            title="Light Novels"/>
            <Filterbar/>
            <LibraryGrid/>
        </div>
    );
};

export default Lightnovels;