import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Transactions from "./components/Transactions";
//https://www.npmjs.com/package/react-tabs

import styles from "./styles/styles.css";

function App() {


  return (
    <div className="App" style={styles}>

      <Header/>

      <div className="user-cards">
        <Card 
          defaultClass="non-active"
          type="VISA" 
          number="3546" 
          holder="John Doe" 
          expiration="02/20" 
          color="#64fc6c"  />

        <Card 
          defaultClass="active"
          type="VISA" 
          number="8014" 
          holder="Lindsey Johnson" 
          expiration="08/21" 
          color="#9b6dff" />

        <Card 
          defaultClass="non-active"
          type="VISA" 
          number="3849" 
          holder="Lee Dojo" 
          expiration="04/22" 
          color="#fc5353" />
      </div>

      <div className="user-transactions">
        <Transactions/>
      </div>

    </div>
  );
}

export default App;
