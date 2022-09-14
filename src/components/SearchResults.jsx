import React, { useState } from "react";

export default function SeacrhResults(props) {
    const input = props.input;
    const [results, setResults] = useState("");

    return (
        // Here the results of the search should be calculated
        <div>
            <h4>Seacrh Results</h4>
            {
                results === ""
                    ?
                    <p style={{paddingTop: "5%"}} className="warning-sign">Nothing Found!</p>
                    :
                    <h5>User</h5>
            }
        </div>
    )
}