import styles from './page.module.css'
import Image from 'next/image'
import Nosotros from "../../components/Nosotros"
import Inicio from "../../components/Inicio"
import Socios from "../../components/Socios"

export default function Home() {
  return (
    <main className={styles.main}>
      <Inicio/>
      <Nosotros/>
    </main>
  )
}
