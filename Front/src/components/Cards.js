import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out golf courses near you!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/USA.png'
              text='Map with ALL golf courses in the USA!'
              label='Explore'
              path='/golf-courses'
            />
            <CardItem
              src='images/newtop.png'
              text='Map to explore the top 100 golf courses in the US!'
              label='Explore'
              path='/top-100-golf-courses'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/basket-of-golf-balls.jpg'
              text='Top 100 Golf Course Cards'
              label='something'
              path='/services'
            />
            <CardItem
              src='images/ig.png'
              text='Sweet Golf Background'
              label='something'
              path='/products'
            />
            <CardItem
              src='images/golf-clubs-driver.jpg'
              text='Future Plans'
              label='something'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;