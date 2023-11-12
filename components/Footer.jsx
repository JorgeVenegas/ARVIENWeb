import Link from 'next/link'

function Footer() {
    return (
        <div className="footer-content">
            <div className="logo-footer">
                <img src="\Group 1.png" alt="Arvien" height="100%"/>
            </div>
            <div className="info">
                <div className="orange-bg">
                    <div className='footer-info'>
                            <div>
                                <Link className="footer-text" href="/">INICIO</Link>
                            </div>
                            <div>
                                <Link className="footer-text" href="/nosotros">NOSOTROS</Link>
                            </div>
                            <div>
                                <Link className="footer-text" href="/contacto">CONTACTO</Link>
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