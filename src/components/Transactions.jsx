import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import React Tabs
//https://www.npmjs.com/package/react-tabs
import 'react-tabs/style/react-tabs.css';

//Components
import SeacrhResults from "./SearchResults";
import Received from "./Received";
import Sent from "./Sent";


//Styling
import styles from "../styles/transactions.css"
import receivedStyles from "../styles/received.css"
import sentStyles from "../styles/sent.css"

export default function Transactions(){
    const [input, setInput] = useState("");

    function handleChange(e) {
        const value = e.target.value;
        setInput(value)
        return(input)
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
                    
                    <div> 
                    { 
                        input === "" 
                            ? 
                            <div>
                                <Sent style={sentStyles}/> 
                                <p style={{paddingTop: "5%"}} className="warning-sign">No more transactions!</p>
                            </div>
                            :
                            <SeacrhResults result={input}/>
                     } 
                    </div>

                </TabPanel>

                <TabPanel className="transaction-panel">
                    <Received style={receivedStyles}/>
                </TabPanel>

            </Tabs>
        </div>
    );
}