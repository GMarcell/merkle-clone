import { NextComponentType } from "next";
import styles from '../styles/Home.module.css'
import Grab from '../assets/GrabLogo.webp'
import Buma from '../assets/BumaLogo.webp'
import Djarum from '../assets/DjarumLogo.webp'
import Hino from '../assets/HinoLogo.webp'
import Ismaya from '../assets/IsmayaLogo.webp'
import LKPP from '../assets/LKPPLogo.webp'
import Moka from '../assets/MokaLogo.webp'
import Miens from '../assets/MiensLogo.webp'
import Image from "next/image";

const Clients: NextComponentType = () => {
  return (
    <div className={styles.clients}>
      <h1 style={{ fontSize: "42px", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>Our Clients</h1>
      <p style={{ color: "gray", fontSize: "15px", textAlign: "center" }}>Driving technology for leading brands</p>
      <div className="4-coloumn">
        <div className={styles.clientItem}>
          <Image src={Grab} alt="Grab" />
        </div>
        <div className={styles.clientItem}>
          <Image src={Moka} alt="Grab" />
        </div>
        <div className={styles.clientItem}>
          <Image src={Ismaya} alt="Grab" />
        </div>
        <div className={styles.clientItem}>
          <Image src={Djarum} alt="Grab" />
        </div>
      </div>
      <div className="4-coloumn"></div>
      <div className={styles.clientItem}>
        <Image src={Buma} alt="Grab" />
      </div>
      <div className={styles.clientItem}>
        <Image src={Miens} alt="Grab" />
      </div>
      <div className={styles.clientItem}>
        <Image src={LKPP} alt="Grab" />
      </div>
      <div className={styles.clientItem}>
        <Image src={Hino} alt="Grab" />
      </div>
    </div>
  )
}

export default Clients