import React from "react";
import NavMenu from "./NavMenu";
import Dashboard from "./Dashboard";
const Home = (userType) => {
    return(
        <div>
            <NavMenu userType={userType.userType}/>
            <Dashboard />
        </div>
    );
}

export default Home;

