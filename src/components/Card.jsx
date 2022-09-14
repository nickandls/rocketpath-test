import React, { useState } from "react";
import styles from "../styles/card.css"

export default function Card(props){
    const [isActive, setIsActive] = useState(props.defaultClass);
    const color = props.color;

    // Change the state of the card between active and non-active
    function handleClick(event) {
        const findClass = event.currentTarget.classList.value;
        
        if(findClass==="active") {
            setIsActive("non-active");
        }
        else {       
            setIsActive("active");
        }
        return isActive;
    }
    return(
        <div id="card" className={isActive} style={{backgroundColor: color}} onClick={handleClick}>
            <div id="card-details">
                <div className="row">

                    {/* Card type (Visa/Mastercard etc)  */}

                    <div className="column  left-column">
                        <h3>{props.type}</h3>
                    </div>
                    <div className="column  right-column">
                        <h3>...</h3>
                    </div>
                </div>

                {/* Card number is hardcoded except the last 4 numbers */}

                <h3>* * * * &nbsp;&nbsp; * * * * &nbsp;&nbsp; * * * * &nbsp;&nbsp; {props.number}</h3>

                {/* Owner details and expiration date */}

                <div className="row owner-details">
                    <div className="column left-column">
                        <p className="card-p">Card Holder</p>
                        <h4>{props.holder}</h4>
                    </div>
                    <div className="column right-column">
                        <p className="card-p">Expires</p>
                        <h4>{props.expiration}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
