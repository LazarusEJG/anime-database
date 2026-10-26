import AboutLayout from "../../components/aboutlayout/AboutLayout";
import LirbaryHeader from "../../components/libraryheader/LibraryHeader";

const Aboutme = () => {
    return (
        <div>
            <LirbaryHeader
            label="Profile"
            title="About Me"/>
            <AboutLayout/>
        </div>
    );
};

export default Aboutme;