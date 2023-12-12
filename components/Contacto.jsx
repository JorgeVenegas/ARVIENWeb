import { ContactForm } from "../src/app/form"

function Contacto() {
    return (
        <div id="contactForm" className="contacto-bg" style={{ backgroundColor: "transparent", width: '100vw' }}>
            <div className="container contacto-content">
                <div className="text-orange-contacto">¡Contáctanos!</div>

                <div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Aviso de privacidad integral</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Comercializadora Arvien S.A de C.V. es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
                                <h6>¿Para qué fines utilizaremos sus datos personales?</h6>
                                <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita: Respuesta a mensajes del formulario de contacto</p>
                                <h6>¿Qué datos personales utilizaremos para estos fines?</h6>
                                <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: Datos de identificación y contacto, Datos laborales, Datos académicos, Datos patrimoniales y/o financieros.</p>
                                <h6>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?</h6>
                                <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>
                                <p>Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a recursos_humanos@arvien.com.mx y deberá contener:</p>
                                <ul>
                                    <li>Nombre completo del titular.</li>
                                    <li>Domicilio.</li>
                                    <li>Teléfono.</li>
                                    <li>Correo electrónico usado en este sitio web.</li>
                                    <li>Copia de una identificación oficial adjunta.</li>
                                    <li>Asunto «Derechos ARCO»</li>
                                    <li>Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</li>
                                </ul>
                                <h6>¿En cuántos días le daremos respuesta a su solicitud?</h6>
                                <p>5 días</p>
                                <h6>¿Por qué medio le comunicaremos la respuesta a su solicitud?</h6>
                                <p>Al mismo correo electrónico de donde se envío la petición.</p>
                                <h6>El uso de tecnologías de rastreo en nuestro portal de internet</h6>
                                <p>Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes: Región en la que se encuentra el usuario, Tipo de navegador del usuario, Tipo de sistema operativo del usuario, Fecha y hora del inicio y final de una sesión de un usuario</p>
                                <p>Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.</p>
                                <h6>¿Cómo puede conocer los cambios en este aviso de privacidad?</h6>
                                <p>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web .</p>
                                <p>Última actualización de este aviso de privacidad: 09/10/2023</p>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Entendido</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='form-container'>
                    <form class="gform" method="POST" action="https://script.google.com/macros/s/AKfycbwXQNA7WrjmBzPkBLCFJrJgDcTILP7GBZ5wq60_FYJGirQmU9AeDpfTv_4R7y6wY07ToA/exec" autoComplete="off">
                        <div class="mb-3">
                            <label class="form-label">Destinatario</label>
                            <select name="mailto" class="form-select">
                                <option selected>Seleccione el destinatario</option>
                                <option value="cotizaciones@arvien.com.mx">cotizaciones@arvien.com.mx</option>
                                <option value="recursos_humanos@arvien.com.mx">recursos_humanos@arvien.com.mx</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Nombre</label>
                            <input type="input" name="name" class="form-control" id="nameInput" placeholder="e.g. Javier" required auto />
                        </div>
                        <div class="mb-3">
                            <label for="lastNameInput" class="form-label">Apellido</label>
                            <input type="input" name="last_name" class="form-control" id="lastNameInput" placeholder="e.g. Ortega" required />
                        </div>
                        <div class="mb-3">
                            <label for="mailInput" class="form-label">E-mail</label>
                            <input type="email" name="mail" class="form-control" id="mailInput" placeholder="e.g. nombre@correo.com" required />
                        </div>
                        <div class="mb-3">
                            <label for="phoneInput" class="form-label">Teléfono</label>
                            <input type="phone" name="phone" class="form-control" id="phoneInput" placeholder="e.g. 222 123 45 67" required />
                        </div>
                        <div class="mb-3">
                            <label for="messageInput" class="form-label">Mensaje</label>
                            <textarea name="message" class="form-control" id="messageInput" rows="3" placeholder="¿Qué nos quieres decir?" required></textarea>
                        </div>
                        <div className="submitBtn">
                            <input class="btn btn-outline-secondary" value="Aviso de privacidad" data-bs-toggle="modal" data-bs-target="#privacyModal" />
                            <input class="btn btn-primary" type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>

                <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" class="toast text-bg-success" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-body">
                            Su mensaje se ha enviado correctamente.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto