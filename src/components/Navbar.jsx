import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/logo.png" alt="Gustozo Pizza" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>

        <li><Link to="/pedido">Pedido</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
