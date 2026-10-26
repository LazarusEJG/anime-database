import "./AboutTop.css"
import "../aboutlayout/AboutLayout.css"
import profileimage from "../../images/profile/profile-image-600x400.jpg"

const AboutTop = () => {
    return(
                <div className="columns" id="about-primary">
                    <img id="about-image-box" src={profileimage}></img>
                    <div id="about-text-box">
                        <h1 className="about-header">Greetings!</h1>
                        <p className="about-text-content">Hello! I'm EJ Gordon. I've watched anime for just about as long as
                            I can remember. From my earlier days of watching classics like Code Geass in a box next to
                            my parent's bed on Netflix, to now with the Crunchyroll subscription I pay for every month
                            to watch the latest series. Over time, I branched out and started reading manga and then
                            light novels too, which led me to make this website as part of my CSCE 242 Web Applications
                            class at the University of South Carolina. I was inspired by probably the most prominent
                            anime database website, MyAnimeList, and decided to make my own kind of database. I hope you
                            enjoy having a look around the site.</p>
                    </div>
                </div>
    )
}

export default AboutTop