//ASSETS
import './AboutText.css';

import { useContext } from 'react';

// COMPONENTS
import Button from '@components/Button/Button';

//CONTEXT
import { AppContext } from '../../contexts/AppContext';

function AboutText() {
  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  return (
    <div className='container'>
      <div className='text-section d-flex'>
        <div className='text-section-text'>
          <h2>{languages?.[language]?.about?.title || 'About'}</h2>
        </div>
        <div className='text-section-text'>
          <p className='primary-color'>{languages?.[language]?.about?.p1 || 'About'}</p>
          <p>{languages?.[language]?.about?.p2 || 'About'}</p>
          <p>{languages?.[language]?.about?.p3 || 'About'}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
