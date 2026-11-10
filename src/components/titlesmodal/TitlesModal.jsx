import "./TitlesModal.css";

const TitlesModal = (props) => {
    return (
        <div id="title-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.close}>
                            &times;
                        </span>
                </div>
                <div id="title-dialog-content">
                    <h2>This is totally the add page frfr</h2>
                </div>
            </div>
        </div>
    )
};

export default TitlesModal;