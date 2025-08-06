import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/favicon.png" alt="Scales icon" className="logo left-logo" />
      <div className="title">
        Systems Engineering for Social Policy: A Structural Guide to Inequality and Reform
      </div>
      <img src="/favicon.png" alt="Scales icon" className="logo right-logo" />
    </header>
  );
}

export default Header;