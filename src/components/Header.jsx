import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/favicon.png" alt="Scales icon" className="logo left-logo" />
      <div className="title">
        Socioecopolitics: Politics Within Ecological Boundaries
      </div>
      <img src="/favicon.png" alt="Scales icon" className="logo right-logo" />
    </header>
  );
}

export default Header;