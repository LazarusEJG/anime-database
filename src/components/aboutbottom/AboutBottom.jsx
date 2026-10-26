import "./AboutBottom.css"
import "../aboutlayout/AboutLayout.css"

const AboutBottom = () => {
    return(
                <div id="about-bottom-box">
                    <h1 className="about-header">Contact Me</h1>
                    <form id="contact-form" action="" method="POST">
                        <p>
                            <label className="section-label" for="name">Name:</label>
                            <input className="about-text-area" type="text" name="name" required/>
                        </p>
                        <p>
                            <label className="section-label" for="email">Email:</label>
                            <input className="about-text-area" type="email" name="email" required/>
                        </p>
                        <p>
                            <label className="section-label" for="message">Message:</label>
                            <textarea className="about-text-area" name="message" required></textarea>
                        </p>
                        <p><button id="about-button" type="submit">Submit</button></p>
                        <p className="section-label" id="result"></p>
                    </form>
                </div>
    )
}

export default AboutBottom