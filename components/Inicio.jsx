import Link from 'next/link'
import Image from 'next/image'

function Inicio() {
    return (
        <div className="inicio-div body-bg" style={{ backgroundColor: "transparent", width: '100vw', height: '100vh' }}>
            <div className="container marginl-r">
                <div className='main-logo'>
                    <Image className="web" src="\Logo-Arvien.svg" alt="Arvien Logo" width={0} height={0} style={{ width: '30%', height: 'auto' }}/>
                    <Image className="mobile" src="\Logo-Arvien.svg" alt="Arvien Logo" width={0} height={0} style={{ width: '70%', height: 'auto' }}/>
                </div>
                <div className='text-description'>Soluciones farmacéuticas de calidad</div>

                <div>
                    <button className="btn-orange-main" type="button"><Link className="nav-link1" href="#contactForm">Solicita información aquí</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Inicio
