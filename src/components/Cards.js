import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Regardez nos dernières destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/aventure.jpg'
              text='Explorer la cité perdue de Petra'
              label='Aventure'
              path='/services'
            />
            <CardItem
              src='images/fancy.jpg'
              text='Voyager dans nos nombreux tout inclus'
              label='Tout inclus'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mystere.jpg'
              text='Laissez nous vous choisir une destination mystère'
              label='Mystère'
              path='/services'
            />
            <CardItem
              src='images/maison.jpg'
              text='Aidez à construire des maisons en amérique centrale'
              label='Humanitaire'
              path='/products'
            />
            <CardItem
              src='images/everest.jpg'
              text='Montez le mont Everest'
              label='Aventure'
              path='/products'
            />
            <CardItem
              src='images/surf.jpg'
              text='Découvrez les meilleurs spots de surf au monde'
              label='Adrénaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
