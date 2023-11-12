import styles from './page.module.css'
import Inicio from "../../components/Inicio"
import Nosotros from "../../components/Nosotros"
import Banner1 from "../../components/Banner1"
import Banner2 from "../../components/Banner2"
import Banner3 from "../../components/Banner3"
import Socios from "../../components/Socios"
import Clientes from "../../components/Clientes"
import Contacto from "../../components/Contacto"

export default function Home() {
  return (
    <main className={styles.main}>
      <Inicio/>
      <Nosotros/>
      <Banner1/>
      <Socios/>
      <Banner2/>
      <Clientes/>
      <Banner3/>
      <Contacto/>
    </main>
  )
}
