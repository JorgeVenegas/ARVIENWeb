import Link from 'next/link'
import Image from 'next/image'
import styles from '../src/app/page.module.css'

function Nosotros() {
    return (
        <div style={{ backgroundColor: "white !important", width: '100vw', height: '100vh', background: 'linear-gradient(215.69deg, rgba(221, 164, 111, 0) 63.31%, rgba(221, 164, 111, 0.4) 96.96%)' }}>

            <div className="nosotros-content container" style={{ paddingTop: '25vh', display: "flex" }}>

                <div className='nosotros-content-info'>
                    <div className='text-main-orange'>XX</div>
                    <div className='text-main'>años en el sector farmacéutico e insumos de salud bridando productos con la mejor calidad </div>
                    <div className='text-description-black'>Tenemos presencia nacional.</div>
                    <div style={{ paddingTop: '5%' }}>
                        <button class="btn-white" type="button"><Link className="nav-link2" href="/contacto">¡Contáctanos!</Link></button>
                    </div>
                </div>

                <div className="nosotros-content-img">
                    <img src="\img1.jpg" alt="Arvien Logo" width="100%" style={{
                        boxShadow: "0px 2.2281556129455566px 14.854369163513184px 0px #00000066",
                        boxShadow: "0px 2.2281556129455566px 14.854369163513184px 0px #00000066",
                        background: 'linear-gradient(36.85deg, rgba(231, 132, 65, 0.015) -68.7%, rgba(152, 76, 24, 0.1) 344.16%)'
                    }} />
                </div>



            </div>
        </div>
    )
}

export default Nosotros