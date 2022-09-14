import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//https://www.npmjs.com/package/react-tabs
import 'react-tabs/style/react-tabs.css';

//Components
import Received from "./Transactions/Received";
import Sent from "./Transactions/Sent";
import User from "./Transactions/User";

//DB
import { transactionDatabase } from "../transactionDatabaseDemo";

//Styling
import styles from "../styles/transactions.css"
import receivedStyles from "../styles/received.css"
import sentStyles from "../styles/sent.css"

export default function Transactions(){
    const [input, setInput] = useState("");
    const [SeacrhResult, setSearchResults] = useState();

    // const usersList = transactionDatabase.map(trans => trans.users);

    // console.log(transactionDatabase[1].users[1].name)

    function handleChange(e) {
        const value = e.target.value;
        setInput(value)

        var result = transactionDatabase.find(item => 
            item.users.find(user => user.name === value))

        console.log("Result: " + JSON.stringify(result));
        
        var res = Object.keys(result).map(key => [Number(key), result[key]])

        console.log(res)
    
        // return setSearchResults( 
        //     <div> 
        //     </div>
        // )
          
    }

    return(

        // Tabs component:
        ////    TabList component that contains the options
        ////    TabPanel component that contains the information of
        ////       each TabList

        <div className="transaction" style={styles}>

        {/* Creating the Tabs */}

            <Tabs className="transaction-tabs">
                <TabList>
                    <Tab>Sent</Tab>
                    <Tab>Received</Tab>
                </TabList>

                <TabPanel className="transaction-panel">
                    <input className="search-bar" type="text" onChange={handleChange} value={input} placeholder="Search transaction"/>
                    <div> { SeacrhResult } </div>
                    <Sent style={sentStyles}/>
                    <p style={{paddingTop: "5%"}} className="warning-sign">No more transactions!</p>
                </TabPanel>

                <TabPanel className="transaction-panel">
                    <Received style={receivedStyles}/>
                </TabPanel>

            </Tabs>
        </div>
    );
}