import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Transactions from "./components/Transactions";
//https://www.npmjs.com/package/react-tabs

import {cardDatabase} from "./cardDatabaseDemo";
import styles from "./styles/styles.css";

function App() {


  return (
    <div className="App" style={styles}>

      <Header/>

      <div className="user-cards">

        {

            cardDatabase.map((card, key) => (
              
              <Card 
                key={key}
                defaultClass={card.defaultClass}
                type={card.type}
                number={card.number}
                holder={card.holder}
                expiration={card.expiration}
                color={card.color}

                />
            ))
        }

      </div>

      <div className="user-transactions">
        <Transactions/>
      </div>

    </div>
  );
}

export default App;
