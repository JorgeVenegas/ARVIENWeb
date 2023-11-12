import Link from 'next/link'

function Nosotros() {
    return (
        <div className='nosotros-bg'>

            <div className="nosotros-content container">

                <div className='nosotros-content-info'>
                    <div className='text-main-orange'>XX</div>
                    <div className='text-main'>años en el sector farmacéutico e insumos de salud bridando productos con la mejor calidad </div>
                    <div className='text-description-black'>Tenemos presencia nacional.</div>
                    <div style={{ paddingTop: '7%', paddingBottom: '7%' }}>
                        <button class="btn-white" type="button"><Link className="nav-link2" href="/contacto">¡Contáctanos!</Link></button>
                    </div>
                </div>

                <div className="nosotros-content-img">
                    <img src="\img1.webp" alt="pharmacy" height="100%"/>
                </div>
            </div>
        </div>

    )
}

export default Nosotros