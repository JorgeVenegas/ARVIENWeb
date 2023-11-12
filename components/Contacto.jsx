import {ContactForm} from "../src/app/form"

function Contacto() {
    return (
        <div className="contacto-bg" style={{ backgroundColor: "transparent", width: '100vw', height: '80vh' }}>
            <div className="container contacto-content">
                <div className="text-main-contacto">¿Qué esperas?</div>
                <div className="text-orange-contacto">¡Contáctanos!</div>
            </div>
            <ContactForm/>
        </div>
    )
}

export default Contacto