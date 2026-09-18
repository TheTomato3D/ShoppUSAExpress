import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>ShoppUSAExpress</h3>
          <p>
            Conectamos tus compras en Estados Unidos con Perú
            de manera simple, rápida y segura.
          </p>
        </div>

        <div className="footer-column">
          <h4>Navegación</h4>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/nosotros">Quiénes Somos</NavLink>
          <NavLink to="/cita">Cita</NavLink>
        </div>

        <div className="footer-column">
          <h4>Servicios</h4>
          <span>Compras mayoristas</span>
          <span>Caja $200</span>
          <span>Tienda virtual</span>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <span>Lima, Perú</span>
          <span>Florida, Estados Unidos</span>
          <NavLink to="/contacto">Contáctanos</NavLink>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ShoppUSAExpress. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer