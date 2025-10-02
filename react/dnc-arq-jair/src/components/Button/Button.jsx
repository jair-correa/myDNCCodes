//ASSETS
import "./Button.css";
import WhiteArrow from "@assets/Vector.svg";
function Button({ arrow, buttonStyle, children, ...props }) {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
      {children}
      {arrow && <img src={WhiteArrow} alt="Seta branca" />}
    </button>
  );
}

export default Button;
