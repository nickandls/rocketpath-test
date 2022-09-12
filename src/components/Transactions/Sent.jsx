import React from "react";
// import User from "./User";

export default function Sent(props, {children}) {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let current = `${date}/${month<10?`0${month}`:`${month}`}/${year}`

    return (
        <div id="transaction-date">
             
            {
                current === props.sortDate 
                ?
                <div>
                    <p>Today</p>
                    
                    {/* <User profile={props.profile} name={props.userName} date={props.expenseDate} expense={props.expense} /> */}
                </div>
                :
                <div>
                    <p>{props.sortDate}</p>
                    {/* <User profile={props.userProfilePic} name={props.userName} date={props.expenseDate} expense={props.expense} /> */}
                </div>

            }
        </div>
    );
}


 