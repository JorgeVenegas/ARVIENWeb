import Link from 'next/link'

function Inicio() {
    return (
        <div className="inicio-div body-bg" style={{ backgroundColor: "transparent", width: '100vw', height: '100vh' }}>
            <div className="container marginl-r">
                <div className='main-logo'>
                    <img className="web" src="\Logo-Arvien.svg" alt="Arvien Logo" width="30%" />
                    <img className="mobile" src="\Logo-Arvien.svg" alt="Arvien Logo" width="70%" />
                </div>
                <div className='text-description'>Soluciones farmacéuticas de calidad</div>

                <div>
                    <button className="btn-orange-main" type="button"><Link className="nav-link1" href="/contacto">Solicita información aquí</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Inicio
