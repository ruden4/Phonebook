import { HomePageUnlogged } from "components/HomePage/HomePageUnlogged";
import { HomePageLogged } from "components/HomePage/HomePageLogged";

import { getIsLoggedIn} from "redux/selectors";
import { useSelector } from "react-redux";

const Home = () => {
    
    const loggedIn = useSelector(getIsLoggedIn);
    
    return (
        <>
            {loggedIn ? <HomePageLogged /> : <HomePageUnlogged/>}
        </>
    )
};

export default Home;