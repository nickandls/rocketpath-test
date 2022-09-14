import React from "react";

export default function User(props){
    return (
        <div id="user">
            <div className="row">
                <div className="column-1">
                    <img className="user-prof-pic" src={props.profile} alt="user" width="50px" height="50px"/>
                </div>
                <div className="column-2 user-details">
                    <p>to: <span className="username">{props.name}</span></p>
                    <p>{props.date}</p>
                </div>
                <div className="column-3">
                    <h2 className="expense">$ {props.expense}</h2>
                </div>
            </div>
        </div>
    );
}