import "./LibraryHeader.css"

const LirbaryHeader = (props) => {
    return (
            <header className="library-header">
                <p className="section-label">{props.label}</p>
                <h1 className="library-title">{props.title}</h1>
            </header>
    )
}

export default LirbaryHeader