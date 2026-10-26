import DetailCover from "../detailcover/DetailCover"
import DetailInfo from "../detailinfo/DetailInfo"
import vivyFull from "../../images/full/vivy-full.png"
import "./DetailCard.css"

const DetailCard = () => {
    return(
        <article id="detail-card">
            <DetailCover
            coverfull={vivyFull}
            rating="10.0"
            />
            <DetailInfo
                name="Vivy -Flourite Eye's Song"
                status="Completed"
                year="2021"
                count="13 ep"
                type="Anime"
                genre="Action, Adventure, Drama, Music, Time-Travel"
                description="When highly evolved AIs set out to eradicate mankind, the carnage that ensues fills the air with the stench of fresh blood and burning bodies. In a desperate bid to prevent the calamity from ever occurring, a scientist bets everything on a remnant from the past. Turning the clock back a hundred years, AIs are already an integral part of human society, programmed with specific missions meant to be carried out for their entire course of operation. Vivy, the first ever autonomous AI, is a songstress tasked with spreading happiness through her voice. In a theme park where she hardly ever gets a proper audience, she strives to pour her heart out into her performances, bound to repeat it day after day—that is, until an advanced AI from the future appears before her and enlists her help in stopping a devastating war a hundred years in the making. With no time to process the revelation that flips her world upside down, Vivy is catapulted into a century-long journey to avert the violent history yet to come. [Sourced from MyanimeList]"
            />
        </article>
    )
}

export default DetailCard