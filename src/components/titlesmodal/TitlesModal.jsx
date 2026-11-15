import { useState } from "react";
import "./TitlesModal.css";
import { API_BASE_URL } from "../../config";
import toast, { Toaster } from "react-hot-toast";

const TitlesModal = (props) => {
    const [type, setType] = useState("Anime");
    const [prevSrc, setPrevSrc] = useState("");
    const [result, setResult] = useState("")

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const addTitleToServer = async (e) => {
        e.preventDefault();
        setResult(toast("Sending data, please wait...",
        {
            style: {
                border: '1px solid rgba(124, 58, 237, 0.4)',
                padding: '16px',
                color: 'rgba(124, 58, 237, 0.4)',
                background: '#07070F'
            }, iconTheme: {
                primary: 'rgba(124, 58, 237, 0.4)',
                secondary: '#FFFAEE',
            }
        }
        ))
        const formData = new FormData(e.target);
        formData.set("rating", Number(e.target.rating.value))
        formData.set("year", Number(e.target.year.value))
        const response = await fetch(`${API_BASE_URL}/api/titles`,{
            "method": "POST",
            "body": formData
        })
        setResult(response.status === 200 ? toast.success("Data Sent!", {
            style: {
                border: '1px solid rgba(124, 58, 237, 0.4)',
                padding: '16px',
                color: 'rgba(124, 58, 237, 0.4)',
                background: '#07070F'
            }, iconTheme: {
                primary: 'rgba(124, 58, 237, 0.4)',
                secondary: '#FFFAEE',
            }
        }) : toast.error("Error"), {
            style: {
                border: '1px solid rgba(124, 58, 237, 0.4)',
                padding: '16px',
                color: 'rgba(124, 58, 237, 0.4)',
                background: '#07070F'
            }, iconTheme: {
                primary: 'rgba(124, 58, 237, 0.4)',
                secondary: '#FFFAEE',
            }
        
        })}

    return (
        <div id="title-dialog" className="w3-modal">
            <Toaster
                position="bottom-center"
            />
            <div className="w3-modal-content" id="title-add-container">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.close}>
                        &times;
                    </span>
                </div>
                <div id="title-dialog-content">
                    <form id="title-add-form" onSubmit={addTitleToServer}>
                        <h1 className="section-label">Add Title</h1>
                        <p>
                            <label className="section-label" htmlFor="name">Title Name:</label>
                            <input className="title-text-area" type="text" id="name" name="name" required minLength={3}/>
                        </p>
                        <p>
                            <label className="section-label" htmlFor="cover">Cover</label>
                            <input className="section-label" name="cover" id="cover" type="file" accept="images/" onChange={uploadImage}></input>
                            <label className="section-label" htmlFor="coverfull">Coverfull</label>
                            <input className="section-label" name="coverfull" id="coverfull" type="file" accept="images/" onChange={uploadImage}></input>
                        </p>
                        <p>
                            <label className="section-label" htmlFor="type"></label>
                            <select className="type-field" id="type" name="type" onChange={(e) => setType(e.target.value)} required>
                                <option>Anime</option>
                                <option>Manga</option>
                                <option>Light Novel</option>
                            </select>
                            <label className="section-label" htmlFor="status"></label>
                            <select className="type-field" id="status" name="status" required>
                                <option>Completed</option>
                                <option>{`${type === "Anime" ? "Watching" : "Reading"}`}</option>
                                <option>{`${type === "Anime" ? "Plan to Watch" : "Plan to Read"}`}</option>
                                <option>Dropped</option>
                            </select>
                            <label className="section-label" htmlFor="rating">Rating:</label>
                            <input className="title-text-area" type="number" step="0.5" id="rating" name="rating" max={10} min={0} required></input>
                            <label className="section-label" htmlFor="count">Count:</label>
                            <input className="title-text-area" id="count" name="count" required></input>
                            <label className="section-label" htmlFor="year">Year:</label>
                            <input className="title-text-area" id="year" name="year" type="number" required min={1900}></input>
                        </p>
                        <p>
                            <label className="section-label" htmlFor="trailer">Youtube Trailer Link:</label>
                            <input className="title-text-area-full" id="trailer" name="trailer"></input>               
                        </p>
                        <p>
                            <label className="section-label" htmlFor="genre">Genres:</label>
                            <input className="title-text-area-full" id="genre" name="genre" required minLength={5}/>
                        </p>
                        <p>
                            <label className="section-label" htmlFor="description">Description:</label>
                            <textarea className="title-text-area-full" id="description" name="description" required minLength={100}></textarea>
                        </p>
                        <p>
                            <button className="title-button" type="submit" >Add</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default TitlesModal;