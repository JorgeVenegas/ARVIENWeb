import Link from 'next/link'
import Image from 'next/image'

function Nosotros() {
    return (
        <div className='nosotros-bg'>

            <div className="nosotros-content container">

                <div className='nosotros-content-info col-6'>
                    <div className='text-main-orange-num'>20</div>
                    <div className='text-main'>años en el sector farmacéutico e insumos para la salud, brindando productos con la mejor calidad</div>
                    <div className='text-description-black'>Tenemos presencia nacional.</div>
                    <div style={{ paddingTop: '7%', paddingBottom: '7%' }}>
                        <button class="btn-white" type="button"><Link className="nav-link2" href="#contactForm">¡Contáctanos!</Link></button>
                    </div>
                </div>

                <div className="nosotros-content-Image col-6">
                    <Image src="/img1.webp" alt="pharmacy" width={1000} height={1000} quality={100} style={{ width: 'auto', height: '100%' }}/>
                </div>
            </div>
        </div>

    )
}

export default Nosotros