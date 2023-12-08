import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return (
        <div className="footer-content">
            <div className="logo-footer">
                <Image src="/Group 1.png" alt="Arvien" width={1000} height={1000} style={{ width: '110%', height: 'auto' }}/>
            </div>
            <div className="info">
                <div className="orange-bg">
                    <div className='footer-info'>
                            <div>
                                <Link className="footer-text" href="/">INICIO</Link>
                            </div>
                    </div>
                    <div className="footer-mail">
                        <div className="footer-text">CONTACTO</div>
                        <div className="footer-text">cotizaciones@arvien.com.mx</div>
                        <div className="footer-text">recursos_humanos@arvien.com.mx</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer