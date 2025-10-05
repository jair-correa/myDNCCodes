//HEADER.JSX
import { useState } from 'react';
import { Link } from 'react-router-dom';

//ASSETS
import './Header.css';
import Logo from '@assets/dnc-logo.svg';

//COMPONENTS
import Button from '@components/Button/Button';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      {' '}
      <div className='container'>
        <div className='header-content'>
          {/* Nova classe para o Flexbox */}
          <Link to='/'>
            <img src={Logo} />
          </Link>
          {/*Botao para abrir o Menu*/}
          <div className='mobile-menu'>
            <Button buttonStyle='secondary' onClick={toggleMenu}>
              Menu
            </Button>
          </div>

          {/*Nav controlada pelo useState*/}
          <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
            <Button buttonStyle='unstyled' className='mobile-menu close-btn' onClick={toggleMenu}>
              X
            </Button>
            <ul className='d-flex'>
              <li>
                <Link to='/'> Home </Link>
              </li>
              <li>
                <Link to='/about'> About </Link>
              </li>
              <li>
                <Link to='/projects'> Projects </Link>
              </li>
              <li>
                <Link to='/contact'> Contact </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
