function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="navbar-logo">
          <span className="logo-shopp">Shopp</span>
          <span className="logo-usa">USA</span>
          <span className="logo-express">Express</span>
          <span className="logo-plane">✈</span>
        </a>

        <nav className="navbar-menu">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">¿Quiénes Somos?</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="navbar-country">
          <span className="navbar-flag">🇺🇸</span>
          <span className="country-divider"></span>
          <span>US</span>
          <span className="country-arrow">⌄</span>
        </div>

      </div>
    </header>
  )
}

export default Navbar