import React from "react";
import Home from './Home';

const LoginCheck = ({login_status}) => {
    // TODO: Add login screen integration
    if (login_status === 1) {
        return (
            // TODO: Add user type logic
            <Home userType="staff"/>
        );
    } else {
        return (
            <div> not logged in bro {login_status}</div>
        );
    }
}

export default LoginCheck