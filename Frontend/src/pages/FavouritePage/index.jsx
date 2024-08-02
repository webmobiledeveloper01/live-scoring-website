import React from "react"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Main, DrawerHeader } from "../../styled";
import CustomTabs from "../../components/CustomTabs";
import Matches from "./Matches";
import Competitions from "./Competitions";
import Teams from "./Teams";
function FavouritePage() {
    const [renderPage, setRenderPage] = React.useState(<Matches></Matches>)
    const open = useSelector(state => state.drawer.open);
    const menu = [
        { text: "Matches", url: "/favourites/matches" },
        { text: "Competitions", url: "/favourites/competitions" },
        { text: "Teams", url: "/favourites/teams" },
    ];

    const { key } = useParams();
    React.useEffect(() => {
        console.log(key)
        switch (key) {
            case "matches":
                setRenderPage(<Matches></Matches>)
                break;
            case "competitions":
                setRenderPage(<Competitions></Competitions>)
                break;
            case "teams":
                setRenderPage(<Teams></Teams>)
                break;

            default:
                break;
        }
    }, [key])
    return (
        <Main open={open}>
            <DrawerHeader />
            {/* <div className="main-body"> */}
                <CustomTabs tabData={menu} borderShow={true} />
                {
                    renderPage
                }

            {/* </div> */}
        </Main >
    );
}



export default FavouritePage;
