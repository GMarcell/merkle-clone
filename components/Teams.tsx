import { NextComponentType } from "next";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import wanita from '../assets/wanita.webp'
import laki from '../assets/laki.webp'

const Teams: NextComponentType = () => {
  return (
    <div className={styles.teams}>
      <h1 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>Our team’s long-running Apps Development Experiences on various Industries</h1>
      <div>
        <div>
          <Image src={wanita} alt="wanita" />
          <h2>Una Lopez</h2>
          <p>Chief of Staff</p>
        </div>
        <div>
          <Image src={laki} alt="laki" />
          <h2>Mike Doe</h2>
          <p>Head of Product</p>
        </div>
        <div>
          <h2>25+</h2>
          <p>Amazing team members</p>
          <p>Doing amazing job everyday</p>
        </div>
      </div>
    </div>
  )
}

export default Teams