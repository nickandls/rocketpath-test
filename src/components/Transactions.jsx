import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//Components
import Received from "./Transactions/Received";
import Sent from "./Transactions/Sent";

//Styling
import styles from "../styles/transactions.css"
import receivedStyles from "../styles/received.css"
import sentStyles from "../styles/sent.css"

export default function Transactions(){
    return(

        <div style={styles}>
            <Tabs className="transaction-tabs">
                <TabList>
                    <Tab>Sent</Tab>
                    <Tab>Received</Tab>
                </TabList>

                <TabPanel className="transaction-panel">
                    <input className="search-bar" type="text" placeholder="Search Transaction"/>
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