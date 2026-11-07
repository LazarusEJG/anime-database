import "./Filterbar.css"

const Filterbar = (props) => {
    

    return (
        <div className="filter-bar">
            <button className={`filter-btn ${props.filter === "All" ? "active" : ""}`} type="button" onClick={()=>props.filterChange("All")}>All</button>
            <button className={`filter-btn ${props.filter === "Completed" ? "active" : ""}`} type="button" onClick={()=>props.filterChange("Completed")}>Completed</button>
            <button className={`filter-btn ${props.filter === "Watching" ? "active" : ""}`} type="button" onClick={()=>props.filterChange(`${props.watchingReading}`)}>{props.watchingReading}</button>
            <button className={`filter-btn ${props.filter === "Plan to Watch" ? "active" : ""}`} type="button" onClick={()=>props.filterChange(`Plan to ${props.watchOrRead}`)}>Plan to {props.watchOrRead}</button>
            <button className={`filter-btn ${props.filter === "Dropped" ? "active" : ""}`} type="button" onClick={()=>props.filterChange("Dropped")}>Dropped</button>
            <span className="filter-count"></span>
        </div>
    );
};

export default Filterbar