import { useContext } from 'react';
import AboutText from '../components/AboutText/AboutText';
import Banner from '../components/Banner/Banner';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

//CONTEXT
import { AppContext } from '../contexts/AppContext';

function About() {
  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  return (
    <>
      <Header />
      <Banner title={languages?.[language]?.menu?.about || 'About'} image='about.png' />
      <div className='container'>
        <AboutText />
      </div>
      <Footer />
    </>
  );
}

export default About;
