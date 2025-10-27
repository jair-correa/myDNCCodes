import { useContext } from 'react';
import ContactForm from '@components/ContactForm/ContactForm';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

//CONTEXT
import { AppContext } from '../contexts/AppContext';

function Contact() {
  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  return (
    <>
      <Header />
      <Banner title={languages?.[language]?.menu?.contact || 'Contact'} image='contact.jpg' />
      <div className='container'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
