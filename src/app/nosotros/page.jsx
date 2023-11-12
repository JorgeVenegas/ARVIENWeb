import Link from 'next/link'
import Banner1 from '../../../components/Banner1'
import Banner2 from '../../../components/Banner2'

function NosotrosPage() {
    return (
        <div>
        <div className="inicio-div nosotros-bg-img page-fondo">
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
        <Banner1/>
        <div className="socios-content">
            <div class="row">
                <div className="header-socios container col-md-11 ">
                    Nuestros socios
                </div>
                <div class="col-md-1"></div>
            </div>

            <div className="container text-center galery">
                <div class="row">
                    <div class="col">
                        <img src="../socios/novartis.webp" alt="NOVARTIS" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/astrazeneca.webp" alt="AstraZeneca" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/merck.webp" alt="MERCK" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/grunenthal.webp" alt="GRUNENTHAL" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/bd.webp" alt="BD" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/3m.webp" alt="3M" width="70%"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <img src="../socios/smith_&_nephew.webp" alt="SMITH&NEPHEW" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/alcon.webp" alt="ALCON" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/bard.webp" alt="BARD" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/fresenius-kabi.webp" alt="FRESENIUS-KABI" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/takeda.webp" alt="TAKEDA" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/carnot-laboratorios.webp" alt="CARNOT-LABORATORIOS" width="90%"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <img src="../socios/gsk.webp" alt="GSK" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/leo.webp" alt="LEO" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/organon.webp" alt="ORGANON" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/teva.webp" alt="TEVA" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/sandoz.webp" alt="SANDOZ" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/solidfarma.webp" alt="SOLIDFARMA" width="90%"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <img src="../socios/tecnofarma.webp" alt="TECNOFARMA" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/grossman.webp" alt="GROSSMAN" width="100%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/bausch-health.webp" alt="BAUSCH-HEALTH" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/valeant.webp" alt="VALEANT" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/ipm.webp" alt="IPM" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/b_braun.webp" alt="B BRAUN" width="90%"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <img src="../socios/synthon.webp" alt="SYNTHON" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/weser pharma.webp" alt="WESER PHARMA" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/quirmex.webp" alt="QUIRMEX" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/hospira.webp" alt="HOSPIRA" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/icu medical.webp" alt="ICU MEDICAL" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/grupo humana.webp" alt="GRUPO HUMANA" width="90%"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <img src="../socios/kener.webp" alt="KENER" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/pint pharma.webp" alt="PINT PHARMA" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/accord-farma.webp" alt="ACCORD FARMA" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/LANDSTEINER.webp" alt="LANDSTEINER" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/nipro.webp" alt="NIPRO" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../socios/ARROW-INTERNATIONAL.webp" alt="ARROW INTERNATIONAL" width="90%"/>
                    </div>
                </div>
            </div>

            <div className="socios-carousel content">
                <div id="carousel-socios4" class="carousel slide c-images" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src="../socios/novartis.webp" alt="NOVARTIS"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/astrazeneca.webp" alt="AstraZeneca"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/merck.webp" alt="MERCK"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/grunenthal.webp" alt="GRUNENTHAL"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/bd.webp" alt="BD"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/3m.webp" alt="3M"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/smith_&_nephew.webp" alt="SMITH&NEPHEW"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/alcon.webp" alt="ALCON"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/bard.webp" alt="BARD"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/fresenius-kabi.webp" alt="FRESENIUS-KABI"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/takeda.webp" alt="TAKEDA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/carnot-laboratorios.webp" alt="CARNOT-LABORATORIOS"/>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-socios4" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-socios4" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="socios-carousel content">
                <div id="carousel-socios5" class="carousel slide c-images" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src="../socios/gsk.webp" alt="GSK"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/leo.webp" alt="LEO"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/organon.webp" alt="ORGANON"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/teva.webp" alt="TEVA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/sandoz.webp" alt="SANDOZ"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/solidfarma.webp" alt="SOLIDFARMA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/tecnofarma.webp" alt="TECNOFARMA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/grossman.webp" alt="GROSSMAN"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/bausch-health.webp" alt="BAUSCH-HEALTH"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/valeant.webp" alt="VALEANT"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/ipm.webp" alt="IPM"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/b_braun.webp" alt="B BRAUN"/>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-socios5" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-socios5" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="socios-carousel content">
                <div id="carousel-socios6" class="carousel slide c-images" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src="../socios/synthon.webp" alt="SYNTHON"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/weser pharma.webp" alt="WESER PHARMA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/quirmex.webp" alt="QUIRMEX"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/hospira.webp" alt="HOSPIRA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/icu medical.webp" alt="ICU MEDICAL"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/grupo humana.webp" alt="GRUPO HUMANA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/kener.webp" alt="KENER"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/pint pharma.webp" alt="PINT PHARMA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/accord-farma.webp" alt="ACCORD FARMA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/LANDSTEINER.webp" alt="LANDSTEINER"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/nipro.webp" alt="NIPRO"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../socios/ARROW-INTERNATIONAL.webp" alt="ARROW INTERNATIONAL"/>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-socios6" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-socios6" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
        <Banner2/>
        <div className="clientes-content">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="header-clientes col-md-11">
                    Nuestros clientes
                </div>
            </div>

            <div className="container text-center galery">
                <div class="row">
                    <div class="col">
                        <img src="../clientes/IMSS.webp" alt="IMSS" width="50%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/IMSS_Bienestar.webp" alt="IMSS_Bienestar" width="55%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/SEDENA.webp" alt="SEDENA" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/SEMAR.webp" alt="SEMAR" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/ISSSTE.webp" alt="ISSSTE" width="90%"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <img src="../clientes/ISSTEP.webp" alt="ISSTEP" width="90%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/ISSSTELEON.webp" alt="ISSSTELEON" width="80%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/ISSTECH.webp" alt="ISSTECH" width="70%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/ISSEG_GTO.webp" alt="ISSEG_GTO" width="80%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/ISSEMYM.webp" alt="ISSEMYM" width="80%"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <img src="../clientes/ICHISAL.webp" alt="ICHISAL" width="80%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/HRAEB.webp" alt="HRAEB" width="50%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/HRAEO.webp" alt="HRAEO" width="80%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/BUAP.webp" alt="BUAP" width="50%"/>
                    </div>
                    <div class="col">
                        <img src="../clientes/UNIVERSIDAD-VERACRUZANA.webp" alt="UNIVERSIDAD-VERACRUZANA" width="60%"/>
                    </div>
                </div>
            </div>

            <div className="socios-carousel content">
                <div id="carousel-clientes" class="carousel slide c-images" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img class="w-50" src="../clientes/IMSS.webp" alt="IMSS"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-50" src="../clientes/IMSS_Bienestar.webp" alt="IMSS_Bienestar"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/SEDENA.webp" alt="SEDENA"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/SEMAR.webp" alt="SEMAR"/>
                        </div>
                        <div class="carousel-item active">
                            <img class="w-100" src="../clientes/ISSSTE.webp" alt="ISSSTE"/>
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
                            <img class="w-100" src="../clientes/ISSTEP.webp" alt="ISSTEP"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/ISSSTELEON.webp" alt="ISSSTELEON"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/ISSTECH.webp" alt="ISSTECH"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/ISSEG_GTO.webp" alt="ISSEG_GTO"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/ISSEMYM.webp" alt="ISSEMYM"/>
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
                            <img class="w-100" src="../clientes/ICHISAL.webp" alt="ICHISAL"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/HRAEB.webp" alt="HRAEB"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/HRAEO.webp" alt="HRAEO"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/BUAP.webp" alt="BUAP"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../clientes/UNIVERSIDAD-VERACRUZANA.webp" alt="UNIVERSIDAD-VERACRUZANA"/>
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
        </div>
    )
}

export default NosotrosPage