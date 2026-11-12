import { useState } from "react";
import "./TitlesModal.css";

const TitlesModal = (props) => {
    const [type, setType] = useState("Anime");

    return (
        <div id="title-dialog" className="w3-modal">
            <div className="w3-modal-content" id="title-add-container">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.close}>
                        &times;
                    </span>
                </div>
                <div id="title-dialog-content">
                    <form id="title-add-form">
                        <h1 className="section-label">Add Title</h1>
                        <p>
                            <label className="section-label" htmlFor="name">Title Name:</label>
                            <input className="title-text-area" type="text" name="name" required />
                        </p>
                        <p>
                            <label className="section-label" htmlFor="type"></label>
                            <select className="type-field" name="type" onChange={(e) => setType(e.target.value)} required>
                                <option>Anime</option>
                                <option>Manga</option>
                                <option>Light Novel</option>
                            </select>
                            <label className="section-label" htmlFor="status"></label>
                            <select className="type-field" name="status" required>
                                <option>Completed</option>
                                <option>{`${type === "Anime" ? "Watching" : "Reading"}`}</option>
                            </select>
                            <label className="section-label" htmlFor="rating">Rating:</label>
                            <input className="title-text-area" type="number" name="rating" max={10} min={0} required></input>
                            <label className="section-label" htmlFor="count">Count:</label>
                            <input className="title-text-area" name="count" required></input>
                            <label className="section-label" htmlFor="year">Year:</label>
                            <input className="title-text-area" name="year" required></input>
                        </p>
                        <p>
                            <label className="section-label" htmlFor="link">Youtube Embed Link:</label>
                            <input className="title-text-area-full" name="link"></input>               
                        </p>
                        <p>
                            <label className="section-label" htmlFor="genres">Genres:</label>
                            <input className="title-text-area-full" name="genres" required />
                        </p>
                        <p>
                            <label className="section-label" htmlFor="description">Description:</label>
                            <textarea className="title-text-area-full" name="description" required></textarea>
                        </p>
                        <p><button className="title-button" type="submit">Add</button></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default TitlesModal;