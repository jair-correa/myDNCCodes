import AboutText from '../components/AboutText/AboutText';
import Banner from '../components/Banner/Banner';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

function About() {
  return (
    <>
      <Header />
      <Banner title='About Us' image='about.png' />
      <div className='container'>
        <AboutText />
      </div>
      <Footer />
    </>
  );
}

export default About;
