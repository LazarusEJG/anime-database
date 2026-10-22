import LibraryCard from "../librarycard/LibraryCard";
import vivyThumb from "../../images/vivy-thumb.png"
import tybw from "../../images/bleachtybw-thumb.png";
import fmaB from "../../images/fmabrotherhood-thumb.png";
import "./LibraryGrid.css";

const LibraryGrid = () => {
    return (
        <section className="library-grid">
            <LibraryCard
                name="Vivy -Flourite Eye's Song"
                status="completed"
                rating="10.0"
                cover={vivyThumb}
                year="2021"
                count="13 ep"
            />
            <LibraryCard
                name="Bleach: Thousand Year Blood War"
                status="completed"
                rating="10.0"
                cover={tybw}
                year="2022"
                count="50 ep"
            />
            <LibraryCard
                name="Fullmetal Alchemist: Brotherhood"
                status="completed"
                rating="9.5"
                cover={fmaB}
                year="2009"
                count="64 ep"
            />
        </section>
    );
};

export default LibraryGrid