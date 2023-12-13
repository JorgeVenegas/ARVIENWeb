import Image from 'next/image'
import Link from 'next/link'

function Clientes() {
    return (
        <div className="clientes-content">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="header-clientes container col-md-11"> 
                    Nuestros clientes
                </div>
            </div>

            <div className="container text-center galery clientes-galery">
                <div class="row">
                    <div class="col">
                        <Image src="/../clientes/imss.webp" alt="IMSS" width={1000} height={1000} style={{ width: '30%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/imss_bienestar.webp" alt="IMSS_Bienestar" width={1000} height={1000} style={{ width: '33%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/sedena.webp" alt="SEDENA" width={1000} height={1000} style={{ width: '90%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/semar.webp" alt="SEMAR" width={1000} height={1000} style={{ width: '75%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/issste.webp" alt="ISSSTE" width={1000} height={1000} style={{ width: '90%', height: 'auto' }}/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <Image src="/../clientes/isstep.webp" alt="ISSTEP" width={1000} height={1000} style={{ width: '80%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/isssteleon.webp" alt="ISSSTELEON" width={1000} height={1000} style={{ width: '75%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/isstech.webp" alt="ISSTECH" width={1000} height={1000} style={{ width: '60%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/isseg_gto.webp" alt="ISSEG_GTO" width={1000} height={1000} style={{ width: '50%', height: 'auto' }}/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <Image src="/../clientes/issemym.webp" alt="ISSEMYM" width={1000} height={1000} style={{ width: '80%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/ichisal.webp" alt="ICHISAL" width={1000} height={1000} style={{ width: '70%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/hraeo.webp" alt="HRAEO" width={1000} height={1000} style={{ width: '80%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/buap.webp" alt="BUAP" width={1000} height={1000} style={{ width: '50%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/universidad-veracruzana.webp" alt="UNIVERSIDAD-VERACRUZANA" width={1000} height={1000} style={{ width: '60%', height: 'auto' }}/>
                    </div>
                </div>
            </div>

            <div className='div-clientes-carousel'>
            <div className="socios-carousel content">
                <div id="carousel-clientes" class="carousel slide c-images" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Image class="" src="/../clientes/imss.webp" width={1000} height={1000} style={{ width: '50%', height: 'auto' }} alt="IMSS"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="" src="/../clientes/imss_bienestar.webp" width={1000} height={1000} style={{ width: '50%', height: 'auto' }} alt="IMSS_Bienestar"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/sedena.webp" width={1000} height={1000} style={{ width: '100%', height: 'auto' }} alt="SEDENA"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/semar.webp" width={1000} height={1000} style={{ width: '100%', height: 'auto' }} alt="SEMAR"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/issste.webp" width={1000} height={1000} style={{ width: '100%', height: 'auto' }} alt="ISSSTE"/>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-clientes" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-clientes" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="socios-carousel content">
                <div id="carousel-clientes2" class="carousel slide c-images" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Image class="w-100" src="/../clientes/isstep.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSTEP"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/isssteleon.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSSTELEON"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/isstech.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSTECH"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/isseg_gto.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSEG_GTO"/>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-clientes2" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-clientes2" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="socios-carousel content">
                <div id="carousel-clientes3" class="carousel slide c-images" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Image class="w-100" src="/../clientes/issemym.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSEMYM"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/ichisal.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ICHISAL"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/hraeo.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="HRAEO"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/buap.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="BUAP"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/universidad-veracruzana.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="UNIVERSIDAD-VERACRUZANA"/>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-clientes3" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-clientes3" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </div>

            <div className='btn-center-clientes'>
                <button class="btn-white-clientes" type="button"><Link className="nav-link2" href="#contactForm">¡Contáctanos!</Link></button>
            </div>

        </div>
    )
}

export default Clientes