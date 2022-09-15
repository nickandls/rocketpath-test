import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



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

                    <div className="row">
                    
                        <div className="column left-column search-transaction">
                            <input className="search-bar" type="text" onChange={handleChange} value={input} placeholder="Search transaction"/>
                            <button className="search-button" type="submit"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                        </div>

                        {/* Icons (radio button based) */}

                        <div className="column right-column icons-transaction">

                            <label>
                                <input type="radio" name="option" value="wallet" disabled/>
                                <FontAwesomeIcon icon={faWallet} />
                            </label>

                            <label>
                                <input type="radio" name="option" value="settings" defaultChecked/>
                                <FontAwesomeIcon icon={faGear} />
                            </label>

                            <label>
                                <input type="radio" name="option" value="chart" disabled/>
                                <FontAwesomeIcon icon={faChartPie} />
                            </label>
                        
                        </div>
                        
                    </div>
                    <div> 
                    {/* Render all the transactions or the search results */}
                    { 
                        input === "" 
                            ? 
                                <div>
                                    <Sent style={sentStyles}/> 
                                    <p style={{paddingTop: "5%"}} className="warning-sign">No more transactions!</p>
                                </div>
                            :
                                <SeacrhResults searchedFor={input}/>
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