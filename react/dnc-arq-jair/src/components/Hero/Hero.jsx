import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';

//CONTEXT
import { AppContext } from '../../contexts/AppContext';

//ASSETS
import './Hero.css';
import Button from '@components/Button/Button';

function Hero() {
  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  return (
    <div className='hero d-flex al-center'>
      <div className='hero-text'>
        <h1>{languages?.[language]?.hero?.title || 'TITLE'}</h1>
        <p>{languages?.[language]?.hero?.subtitle || 'SUBTITLE'}</p>
        <Link>
          <Button buttonStyle='secondary' arrow>
            {languages?.[language]?.hero?.cta || 'CTA'}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
