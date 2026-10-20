import "./TopPicks.css"

const TopPicks = () => {
    return (
          <section id="top-picks" className="three">
            <p className="section-label">EJ's Top Picks</p>
            <div id="picks-table">
              <div className="picks-row picks-header">
                <span className="col-rank">#</span>
                <span className="col-thumb"></span>
                <span className="col-title">Title</span>
                <span className="col-type desktop-only">Type</span>
                <span className="col-score desktop-only">Score</span>
                <span className="col-status desktop-only">Status</span>
              </div>
            </div>
          </section>
    )
}

export default TopPicks