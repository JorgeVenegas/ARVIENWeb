import Link from 'next/link'
import Banner1 from "../../../components/Banner1"
import Banner2 from "../../../components/Banner2"
import Socios from "../../../components/Socios"
import Clientes from "../../../components/Clientes"
import Image from 'next/image'

function NosotrosPage() {
    return (
        <div>
            <div className="inicio-div nosotros-bg-Image page-fondo">
                <div className="nosotros-content-page container content-page">
                    <div className='nosotros-content-page col-6 container'>
                        <div className='text-main-orange text-right'>Nuestra historia</div>
                        <div className='text-content-page paddingTop-content-page text-right'>Contamos con XX años de experiencia en el sector farmacéutico e insumos de salud, bridando productos con la mejor calidad a todo México. </div>
                        <div className='text-content-page paddingTop-content-page text-right'>¿Ya conoces a nuestros socios y clientes? </div>
                        <div className='btn-nosotros-page'>
                            <button class="btn-white" type="button"><Link className="nav-link2 btext" href="/contacto">¡Contáctanos!</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <Banner1 />
            <Socios />
            <Banner2 />
            <Clientes />
        </div>
    )
}

export default NosotrosPage