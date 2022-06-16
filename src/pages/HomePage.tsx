import { useState } from "react";
import BeweegSnackPage from "./BeweegSnack";
import relax from "../images/homePage/relax.png";
import gif from "../images/homePage/gif.png";
import orient from "../images/homePage/orient.png";
import speelplaats from "../images/homePage/speelplaats.png";
import taal from "../images/homePage/taal.png";
import webs from "../images/homePage/webs.png";
import wiskunde from "../images/homePage/wiskunde.png";
import beweeg from "../images/homePage/beweeg.png";

enum Pages {
    CURRENT,
    ACTIEVESPEELPLAATSWERKING_PAGE,
    BEWEEGSNACK_PAGE,
    GIF_PAGE,
    ONSTPANNING_PAGE,
    ORIENTATIEOPDEWERELD_PAGE,
    TAALONTWOKKELING_PAGE,
    WISKUNDIGDENKEN_PAGE,
    WEBSITE_PAGE
}

const pageInfo = [
    { 
        title: "actieve speelplaatswerking",
        page: Pages.ACTIEVESPEELPLAATSWERKING_PAGE,
        img: speelplaats
    },
    { 
        title: "beweeg snack",
        page: Pages.BEWEEGSNACK_PAGE,
        img: beweeg
    },
    { 
        title: "gif",
        page: Pages.GIF_PAGE,
        img: gif
    },
    { 
        title: "ontspanning",
        page: Pages.ONSTPANNING_PAGE,
        img: relax
    },
    { 
        title: "oriëntatie op de wereld",
        page: Pages.ORIENTATIEOPDEWERELD_PAGE,
        img: orient
    },
    { 
        title: "taalontwikkeling",
        page: Pages.TAALONTWOKKELING_PAGE,
        img: taal
    },
    { 
        title: "wiskundig denken",
        page: Pages.WISKUNDIGDENKEN_PAGE,
        img: wiskunde
    },
    { 
        title: "website",
        page: Pages.WEBSITE_PAGE,
        img: webs
    }
]

const HomePage = () => {
    const [currentPage, changeCurrentPage] = useState<Pages>(Pages.CURRENT);

    const onBack = () => {
        changeCurrentPage(Pages.CURRENT);
    }
    switch(currentPage) {
        case Pages.BEWEEGSNACK_PAGE:
            return <BeweegSnackPage onBack={onBack}/>
        default:
            return (
                <div className="homePageContainer">
                    {
                        pageInfo.map(info => <div onClick={() => changeCurrentPage(info.page)}>
                            <img src={info.img}></img>
                            <p>{info.title}</p>
                            </div>)
                    }
                </div>
            );
    }
}

export default HomePage;