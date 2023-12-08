import Link from 'next/link'
import Banner1 from '../../../components/Banner1'
import Banner2 from '../../../components/Banner2'
import Socios from '../../../components/Socios'
import Clientes from '../../../components/Clientes'
import Image from 'next/image'

function NosotrosPage() {
    return (
        <div>
        <div className="inicio-div nosotros-bg-Image page-fondo">
            
            <div className='nosotros-info container'>
                <div className='logo-nosotros'>
                    <Image className="web" src="\Logo-Arvien.svg" alt="Arvien Logo" width={0} height={0} style={{ width: '120%', height: 'auto' }}/>
                </div>

                <div className="nosotros-content-page container content-page">
                    <div className='nosotros-content-page col-6 container'>
                        <div className='text-main-orange text-right'>Nuestra historia</div>
                        <div className='text-content-page paddingTop-content-page text-right'>20 años en el sector farmacéutico e insumos para la salud, brindando productos con la mejor calidad. </div>
                        <div className='text-content-page paddingTop-content-page text-right'>¿Ya conoces a nuestros socios y clientes? </div>
                        <div className='btn-nosotros-page'>
                            <button class="btn-white" type="button"><Link className="nav-link2 btext" href="/#contactForm">¡Contáctanos!</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Banner1/>
        <Socios/>
        <Banner2/>
        <Clientes/>
        </div>
    )
}

export default NosotrosPage