import { Link } from "react-router-dom";

//ASSETS
import Logo from "../../assets/dnc-logo.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-btween">
          <Link to="/">
            <img src={Logo}></img>
          </Link>
        </div>
        <nav>
          <ul className="d-flex">
            <li>
              <Link to="/"> Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/projects"> Projects </Link>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
