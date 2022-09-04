import React from "react";
import NavMenu from "../../Nav/NavMenu";
import Dashboard from "../Dashboard/Dashboard";
const Home = (userType) => {
    return(
        <div>
            <NavMenu userType={userType.userType}/>
            <Dashboard />
        </div>
    );
}

export default Home;

