import React, { useState } from "react";
import styles from "../styles/card.css"

export default function Card(props){

    const color = props.color;

    return(
        <div id="card" className={props.defaultClass} style={{backgroundColor: color}}>
            <div id="card-details">
                <div className="row">
                    <div className="column">
                        <h3>{props.type}</h3>
                    </div>
                    <div className="column">
                        <h3>...</h3>
                    </div>
                </div>
                <h3>**** **** **** {props.number}</h3>
                <div className="row owner-details">
                    <div className="column">
                        <p className="card-p">Card Holder</p>
                        <h4>{props.holder}</h4>
                    </div>
                    <div className="column">
                        <p className="card-p">Expires</p>
                        <h4>{props.expiration}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}