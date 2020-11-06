import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import NavBar from "./pages/Navbar/Navbar";


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <NavBar/>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
