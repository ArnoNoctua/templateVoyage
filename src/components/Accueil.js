import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Accueil.css';

function Accueil() {
  return (
    <div className='accueil-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>JUSQU'OÙ IREZ-VOUS ?</h1>
      <p>L'aventure ne fait que commencer !</p>
      <div className='accueil-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          COMMENCER
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          REGARDER LE FILM <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Accueil;
