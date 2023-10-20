import Link from 'next/link'

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ paddingBottom: '1vw', paddingTop: '2vh', width: '100%', maxWidth: '100%' }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link1" href="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link1" href="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <button class="btn-orange-nav" type="button"><Link className="nav-link1" href="/contacto">CONTACTO</Link></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation