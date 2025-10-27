import { useContext } from 'react';

//FOOTER.JSX
import { Link } from 'react-router-dom';

// ASSETS
import Logo from '../../assets/dnc-logo.svg';
import BrasilIcon from '../../assets/brazil.svg';
import UsaIcon from '../../assets/usa.svg';
import FacebookIcon from '../../assets/facebook.svg';
import TwitterIcon from '../../assets/twitter.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import './Footer.css';

//CONTEXTS

import { AppContext } from '../../contexts/AppContext';

import Button from '@components/Button/Button';

function Footer() {
  // Dados dinâmicos para evitar repetição
  const socialLinks = [
    { href: 'https://facebook.com', icon: FacebookIcon, alt: 'Facebook' },
    { href: 'https://twitter.com', icon: TwitterIcon, alt: 'Twitter' },
    { href: 'https://linkedin.com', icon: LinkedinIcon, alt: 'LinkedIn' },
    { href: 'https://instagram.com', icon: InstagramIcon, alt: 'Instagram' },
  ];

  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  const pageLinks = [
    { to: '/', label: languages?.[language]?.menu?.home || 'Home' },
    { to: '/about', label: languages?.[language]?.menu?.about || 'About' },
    { to: '/projects', label: languages?.[language]?.menu?.projects || 'Projects' },
    { to: '/contact', label: languages?.[language]?.menu?.contact || 'Contact' },
  ];
  const changeLanguage = (country) => {
    if (appContext?.setLanguage) {
      appContext.setLanguage(country);
    }
  };

  return (
    <footer>
      <div className='container '>
        <div className='d-flex jc-space-between mobile-fd-column'>
          {/* Coluna logo */}
          <div className='footer-logo-col mobile-fd-column'>
            <img src={Logo} className='footer-logo' alt='Logo DNC' />
            <p className='grey-1-color'>{languages?.[language]?.general?.footerLogoText || ''}</p>
            <div className='d-flex social-links '>
              {socialLinks.map(({ href, icon, alt }, index) => (
                <a key={index} href={href} target='_blank' rel='noopener noreferrer'>
                  <img src={icon} alt={alt} />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna links e contato */}
          <div className='d-flex'>
            <nav className='footer-col' aria-label='Links principais'>
              <h3>{languages?.[language]?.general?.pages || 'Pages'}</h3>
              <ul>
                {pageLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className='footer-col'>
            <h3>{languages?.[language]?.general?.contact || 'Contact'}</h3>
            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
            <p className='grey-1-color'>suporte@escoladnc.com.br</p>
            <p className='grey-1-color'>(19) 99187-4342</p>
          </div>
        </div>

        {/* Copyright + Idiomas */}
        <div className='d-flex jc-space-between footer-copy footer-copy-grid'>
          <div>
            <p className='grey-1-color'>Copyright © DNC - 2024</p>
          </div>
          <div className='langs-area'>
            <Button buttonStyle='unstyled' onClick={() => changeLanguage('br')}>
              <img src={BrasilIcon} height='29px' alt='Português (Brasil)' />
            </Button>
            <Button buttonStyle='unstyled' onClick={() => changeLanguage('en')}>
              <img src={UsaIcon} height='29px' alt='English (US)' />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
