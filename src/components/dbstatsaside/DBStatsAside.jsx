import DBStatsBoxA from "../dbstatsboxa/DBStatsBoxA";
import DBStatsBoxL from "../dbstatsboxl/DBStatsBoxL";
import DBStatsBoxM from "../dbstatsboxm/DBStatsBoxM";
import "./DBStatsAside.css";
import { useEffect, useState } from "react";

const DBStatsAside = () => {
    const base_url = "https://lazarusejg.github.io/csce242/projects/07parsing-and-contact/json/titles.json";

    const GetTitles = async () => {
        const response = await fetch(base_url);
        return response.json();
    };

    const [aValue, setAValue] = useState(0)
    const [aValueC, setAValueC] = useState(0)
    const [aValueW, setAValueW] = useState(0)
    const [aValueP, setAValueP] = useState(0)
    const [aValueD, setAValueD] = useState(0)

    const UpdateAnimeValue = async () => {
        const titles = await GetTitles();
        const animeTitles = titles.filter(title => title.type === "Anime");
        const animeTitlesC = titles.filter(title => title.type === "Anime" && title.status === "Completed");
        const animeTitlesW = titles.filter(title => title.type === "Anime" && title.status === "Watching");
        const animeTitlesP = titles.filter(title => title.type === "Anime" && title.status === "Plan to Watch");
        const animeTitlesD = titles.filter(title => title.type === "Anime" && title.status === "Dropped");
        setAValue(animeTitles.length)
        setAValueC(animeTitlesC.length)
        setAValueW(animeTitlesW.length)
        setAValueP(animeTitlesP.length)
        setAValueD(animeTitlesD.length)
    };

    const [mValue, setMValue] = useState(0)
    const [mValueC, setMValueC] = useState(0)
    const [mValueR, setMValueR] = useState(0)
    const [mValueP, setMValueP] = useState(0)
    const [mValueD, setMValueD] = useState(0)

    const UpdateMangaValue = async () => {
        const titles = await GetTitles();
        const mangaTitles = titles.filter(title => title.type === "Manga");
        const mangaTitlesC = titles.filter(title => title.type === "Manga" && title.status === "Completed");
        const mangaTitlesR = titles.filter(title => title.type === "Manga" && title.status === "Reading");
        const mangaTitlesP = titles.filter(title => title.type === "Manga" && title.status === "Plan to Watch");
        const mangaTitlesD = titles.filter(title => title.type === "Manga" && title.status === "Dropped");
        setMValue(mangaTitles.length)
        setMValueC(mangaTitlesC.length)
        setMValueR(mangaTitlesR.length)
        setMValueP(mangaTitlesP.length)
        setMValueD(mangaTitlesD.length)
    };

    const [lValue, setLValue] = useState(0)
    const [lValueC, setLValueC] = useState(0)
    const [lValueR, setLValueW] = useState(0)
    const [lValueP, setLValueP] = useState(0)
    const [lValueD, setLValueD] = useState(0)

    const UpdateLightNovelValue = async () => {
        const titles = await GetTitles();
        const lightNovelTitles = titles.filter(title => title.type === "Light Novel");
        const lightNovelTitlesC = titles.filter(title => title.type === "Light Novel" && title.status === "Completed");
        const lightNovelTitlesR = titles.filter(title => title.type === "Light Novel" && title.status === "Reading");
        const lightNovelTitlesP = titles.filter(title => title.type === "Light Novel" && title.status === "Plan to Watch");
        const lightNovelTitlesD = titles.filter(title => title.type === "Light Novel" && title.status === "Dropped");
        setLValue(lightNovelTitles.length)
        setLValueC(lightNovelTitlesC.length)
        setLValueW(lightNovelTitlesR.length)
        setLValueP(lightNovelTitlesP.length)
        setLValueD(lightNovelTitlesD.length)
    };

    function ValueUpdate(){
        useEffect(() => {
        UpdateAnimeValue();
        UpdateMangaValue();
        UpdateLightNovelValue();
    })}

    ValueUpdate();

    

    return (
        <aside id="db-stats" className="one">
            <p className="section-label">Database Stats</p>
            <DBStatsBoxA
                animeStat={aValue}
                animeStatC={aValueC}
                animeStatW={aValueW}
                animeStatP={aValueP}
                animeStatD={aValueD}
                aCBarWidth={{width: NaN || 0 ? `0%` : `${aValueC / aValue * 100}%`}}
                aWBarWidth={{width: NaN || 0 ? `0%` : `${aValueW / aValue * 100}%`}}
                aPBarWidth={{width: NaN || 0 ? `0%` : `${aValueP / aValue * 100}%`}}
                aDBarWidth={{width: NaN || 0 ? `0%` : `${aValueD / aValue * 100}%`}}
            />
            <DBStatsBoxM 
                mangaStat={mValue}
                mangaStatC={mValueC}
                mangaStatR={mValueR}
                mangaStatP={mValueP}
                mangaStatD={mValueD}
                mCBarWidth={{width: NaN || 0 ? `0%` : `${mValueC / mValue * 100}%`}}
                mRBarWidth={{width: NaN || 0 ? `0%` : `${mValueR / mValue * 100}%`}}
                mPBarWidth={{width: NaN || 0 ? `0%` : `${mValueP / mValue * 100}%`}}
                mDBarWidth={{width: NaN || 0 ? `0%` : `${mValueD / mValue * 100}%`}}
            />
            <DBStatsBoxL 
                lightNovelStat={lValue}
                lightNovelStatC={lValueC}
                lightNovelStatR={lValueR}
                lightNovelStatP={lValueP}
                lightNovelStatD={lValueD}
                lCBarWidth={{width: NaN || 0 ? `0%` : `${lValueC / lValue * 100}%`}}
                lRBarWidth={{width: NaN || 0 ? `0%` : `${lValueR / lValue * 100}%`}}
                lPBarWidth={{width: NaN || 0 ? `0%` : `${lValueP / lValue * 100}%`}}
                lDBarWidth={{width: NaN || 0 ? `0%` : `${lValueD / lValue * 100}%`}}
            />
        </aside>
    );
};

export default DBStatsAside;