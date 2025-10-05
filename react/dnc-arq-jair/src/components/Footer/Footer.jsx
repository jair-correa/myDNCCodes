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

function Footer() {
  // Dados dinâmicos para evitar repetição
  const socialLinks = [
    { href: 'https://facebook.com', icon: FacebookIcon, alt: 'Facebook' },
    { href: 'https://twitter.com', icon: TwitterIcon, alt: 'Twitter' },
    { href: 'https://linkedin.com', icon: LinkedinIcon, alt: 'LinkedIn' },
    { href: 'https://instagram.com', icon: InstagramIcon, alt: 'Instagram' },
  ];

  const pageLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer>
      <div className='container '>
        <div className='d-flex jc-space-between mobile-fd-column'>
          {/* Coluna logo */}
          <div className='footer-logo-col mobile-fd-column'>
            <img src={Logo} className='footer-logo' alt='Logo DNC' />
            <p className='grey-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
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
              <h3>Pages</h3>
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
            <h3>Contact</h3>
            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
            <p className='grey-1-color'>suporte@escoladnc.com.br</p>
            <p className='grey-1-color'>(19) 99187-4342</p>
          </div>
        </div>

        {/* Copyright + Idiomas */}
        <div className='d-flex jc-space-between footer-copy'>
          <div>
            <p className='grey-1-color'>Copyright © DNC - 2024</p>
          </div>
          <div className='langs-area d-flex'>
            <img src={BrasilIcon} height='29px' alt='Português (Brasil)' />
            <img src={UsaIcon} height='29px' alt='English (US)' />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
