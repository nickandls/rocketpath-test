import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Transactions from "./components/Transactions";

// Import Swiper React components
//https://swiperjs.com/react
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import {cardData} from "./data/cardData";
import styles from "./styles/styles.css";



export default function App() {

  const acticeCard = cardData.findIndex(card =>
      card.defaultClass === "active"
  )

  return (
    <div className="App" style={styles}>
      <Header/>
      <div className="user-cards">
      {/*
        Creating Swiper and specifying swiper's settings 
        The swiper is being used to show the cards
      */}

        <Swiper
          initialSlide={acticeCard}
          modules={[Grid]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            },

          }} grid={{
              rows:1
          }} className="cards-swiper"
        >
          {
            /* 
              --Map card database into Card component
              --Creating SwiperSlide, each slide that will be created
                will contain a card from the database 
            */
            cardData.map((card, key) => (
              
              <SwiperSlide key={key}>
                <Card
                  defaultClass={card.defaultClass}
                  type={card.type}
                  number={card.number}
                  holder={card.holder}
                  expiration={card.expiration}
                  color={card.color}
                />
              </SwiperSlide>

            ))
          }
        </Swiper>
      </div>
      <div className="user-transactions">
        <Transactions/>
      </div>
    </div>
  );
}

