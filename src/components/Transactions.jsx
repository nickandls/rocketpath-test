import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//Components
import Received from "./Transactions/Received";
import Sent from "./Transactions/Sent";
import User from "./Transactions/User";


//Styling
import styles from "../styles/transactions.css"
import receivedStyles from "../styles/received.css"
import sentStyles from "../styles/sent.css"

export default function Transactions(){
    return(

        <div>
            <Tabs className="transaction-tabs">
                <TabList>
                    <Tab>Sent</Tab>
                    <Tab>Received</Tab>
                </TabList>

                <TabPanel className="transaction-panel">
                    <input className="search-bar" type="text" placeholder="Search Transaction"/>

                    <Sent sortDate="12/09/2022">
                        <User profile="./images/user-profile-pic-1.jpg" name="Rebecca Moore" date="12/09/2022" expense="972" />
                    </Sent>

                    {/* <Sent sortDate="11/09/2022" userProfilePic="./images/user-profile-pic-2.jpg" userName="Annie Franz" expenseDate="11/09/2022" expense="125" /> */}
                
                
                </TabPanel>

                <TabPanel className="transaction-panel">
                    <Received/>
                </TabPanel>

            </Tabs>
        </div>
    );
}