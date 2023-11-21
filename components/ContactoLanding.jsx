import Link from 'next/link'
import Image from 'next/image'

function ContactoLanding() {
    return (
        <div className='nosotros-bg'>
            <div className="inicio-div nosotros-bg-Image page-fondo">
                <div className="nosotros-content-page container content-page">
                    <div className='nosotros-content-page col-6 container'>
                        <div className='text-main-orange text-right'>Contacto</div>
                        <div className='text-content-page paddingTop-content-page text-right'>Queremos escucharte </div>
                        <div className='text-content-page paddingTop-content-page text-right'>¡Dinos cómo podemos ayudarte!</div>
                        <div className='btn-nosotros-page'>
                            <button class="btn-white" type="button"><Link className="nav-link2 btext" href="#contactForm">¡Contáctanos!</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactoLanding