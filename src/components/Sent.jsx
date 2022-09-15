import React from "react";
import { transactionData } from "../data/transactionData";
import User from "./User";

export default function Sent(props) {

    // Find current date

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let current = `${date}/${month<10?`0${month}`:`${month}`}/${year}`

    return (

        // About the code below:
        //// For every date that code fetches from the database
        //// different divs will be created and each div will contain
        //// an other different that will contain the transactions of 
        //// that date.

        <div id="users-content">

            {
                transactionData.slice().reverse().map((trans, key) => (
                    <div className="user-transaction-date" key={key}>
                       
                        {
                            current === trans.date
                            ?
                                <p>Today</p>
                            :
                            <p>{trans.date}</p>
                        }

                        {trans.users.map((user, index) => (

                            <div id="users-transaction" key={index}>
                                <User 
                                    key={index}
                                    profile={user.profile} 
                                    name={user.name} 
                                    date={user.expenseDate} 
                                    expense={user.expense}
                                />
                            </div>
                            
                        ))}
                    </div>
                ))
            }  
        </div>
    );
}


 