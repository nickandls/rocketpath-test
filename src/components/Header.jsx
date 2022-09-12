import React from "react";
import Balance from "./Balance"
import styles from "../styles/header.css"

export default function Header() {
    return (
        <div id="header" className="row">
            <div className="column">
                <Balance/>
            </div>
            <div className="column">
                <img id="profile_pic" src="./images/profile.png" alt="profile-pic" width="40px" height="40px"/>
            </div>
        </div>
    );
}