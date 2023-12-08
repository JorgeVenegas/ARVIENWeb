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

            <div className="container text-center galery">
                <div class="row">
                    <div class="col">
                        <Image src="/../clientes/IMSS.webp" alt="IMSS" width={1000} height={1000} style={{ width: '30%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/IMSS_Bienestar.webp" alt="IMSS_Bienestar" width={1000} height={1000} style={{ width: '33%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/SEDENA.webp" alt="SEDENA" width={1000} height={1000} style={{ width: '90%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/SEMAR.webp" alt="SEMAR" width={1000} height={1000} style={{ width: '75%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/ISSSTE.webp" alt="ISSSTE" width={1000} height={1000} style={{ width: '90%', height: 'auto' }}/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <Image src="/../clientes/ISSTEP.webp" alt="ISSTEP" width={1000} height={1000} style={{ width: '90%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/ISSSTELEON.webp" alt="ISSSTELEON" width={1000} height={1000} style={{ width: '80%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/ISSTECH.webp" alt="ISSTECH" width={1000} height={1000} style={{ width: '70%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/ISSEG_GTO.webp" alt="ISSEG_GTO" width={1000} height={1000} style={{ width: '60%', height: 'auto' }}/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <Image src="/../clientes/ISSEMYM.webp" alt="ISSEMYM" width={1000} height={1000} style={{ width: '80%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/ICHISAL.webp" alt="ICHISAL" width={1000} height={1000} style={{ width: '80%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/HRAEO.webp" alt="HRAEO" width={1000} height={1000} style={{ width: '80%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/BUAP.webp" alt="BUAP" width={1000} height={1000} style={{ width: '50%', height: 'auto' }}/>
                    </div>
                    <div class="col">
                        <Image src="/../clientes/UNIVERSIDAD-VERACRUZANA.webp" alt="UNIVERSIDAD-VERACRUZANA" width={1000} height={1000} style={{ width: '60%', height: 'auto' }}/>
                    </div>
                </div>
            </div>

            <div className="socios-carousel content">
                <div id="carousel-clientes" class="carousel slide c-images" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Image class="w-50" src="/../clientes/IMSS.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="IMSS"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-50" src="/../clientes/IMSS_Bienestar.webp" width={1000} height={1000} style={{ width: '50%', height: 'auto' }} alt="IMSS_Bienestar"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/SEDENA.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="SEDENA"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/SEMAR.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="SEMAR"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/ISSSTE.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSSTE"/>
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
                            <Image class="w-100" src="/../clientes/ISSTEP.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSTEP"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/ISSSTELEON.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSSTELEON"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/ISSTECH.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSTECH"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/ISSEG_GTO.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSEG_GTO"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/ISSEMYM.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ISSEMYM"/>
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
                            <Image class="w-100" src="/../clientes/ICHISAL.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="ICHISAL"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/HRAEB.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="HRAEB"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/HRAEO.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="HRAEO"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/BUAP.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="BUAP"/>
                        </div>
                        <div class="carousel-item">
                            <Image class="w-100" src="/../clientes/UNIVERSIDAD-VERACRUZANA.webp" width={1000} height={1000} style={{ width: '60%', height: 'auto' }} alt="UNIVERSIDAD-VERACRUZANA"/>
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
    )
}

export default Clientes