import React from "react";
import User from "./User";
import { transactionData } from "../transactionData";

export default function SeacrhResults(props) {
    const input = props.searchedFor
    let found = []

    // --filter (first) is being used to filter in every 
    // cell of the data's array
    // --filter (second) is being used to find if the input
    // is included in each cell's item
    // --found items are being assigned inside 
    // an array that's being rendered

    let output = transactionData.filter(item => 
        item.users.filter((user) => {
            if(user.name.toLowerCase().includes(input.toLowerCase())){
                found.push(
                    {
                        profile: user.profile,
                        name: user.name,
                        date: user.expenseDate,
                        expense: user.expense
                    }
                )
            }
            return true;
        })     
    )
    return (
        // output.length is being used to check if there are 
        // results
        <div>
            <h4>Seacrh Results</h4>
            {
                output.length
                ?
                    <div>
                    {
                        found.map(user => (
                            <div id="users-transaction">
                                <User
                                    profile={user.profile}
                                    name={user.name}
                                    date={user.date}
                                    expense={user.expense}
                                />
                            </div>
                        ))
                        
                    } 
                    </div>
                :
                    <p style={{paddingTop: "5%"}} className="warning-sign">Nothing Found!</p>
                }   
        </div>
    )
}
