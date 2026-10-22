import "./Filterbar.css"

const Filterbar = () => {
    return (
        <div className="filter-bar">
            <button className="filter-btn active" type="button">All</button>
            <button className="filter-btn" type="button">Completed</button>
            <button className="filter-btn" type="button">Watching</button>
            <button className="filter-btn" type="button">Plan to Watch</button>
            <button className="filter-btn" type="button">Dropped</button>
            <span className="filter-count"></span>
        </div>
    );
};

export default Filterbar