import Link from 'next/link'

function Inicio() {
    return (
        <div className="inicio-div body-bg" style={{ backgroundColor: "transparent", width: '100vw', height: '100vh' }}>
            <div className="container">
                <div className='main-logo'>
                    <img src="\Logo-Arvien.webp" alt="Arvien Logo" width="30%" />
                </div>
                <div className='text-description'>Soluciones farmaceuticas de calidad</div>

                <div>
                    <button className="btn-orange-main" type="button"><Link className="nav-link1" href="/contacto">Solicita información aquí</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Inicio
