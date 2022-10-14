import { NextComponentType } from "next";
import Image from "next/image";
import VisiMisiImg from "../assets/Mk-3.webp"
import styles from '../styles/Home.module.css'

const VisiMisi: NextComponentType = () => {
  return (
    <div className={styles.visiMisi}>
      <div className={styles.visiMisiImageContainer}>
        <Image src={VisiMisiImg} alt="visi-misi" />
      </div>
      <div className={styles.visiMisiWord}>
        <p style={{ fontWeight: "bolder", fontSize: "14px", marginBottom: "30px" }}>Brand Promise</p>
        <h1 className={styles.visiMisiTitle}>Our Vision & Mission</h1>
        <p className={styles.visiMisiP}>Contributing to Global Industries by Providing TrustedSolution to Improve Value with Information Technology, Digital Technology, and Media Technology.</p>
      </div>
    </div>
  )
}

export default VisiMisi