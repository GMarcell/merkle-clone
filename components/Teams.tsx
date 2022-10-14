import { NextComponentType } from "next";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import wanita from '../assets/wanita.webp'
import laki from '../assets/laki.webp'

const Teams: NextComponentType = () => {
  return (
    <div className={styles.teams}>
      <h1 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>Our team’s long-running Apps Development Experiences on various Industries</h1>
      <div className={styles.allTeamsContainer}>
        <div className={styles.teamContainer}>
          <Image src={wanita} alt="wanita" />
          <div className={styles.teamName}>
            <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>Una Lopez</h4>
            <p style={{ color: "gray", fontSize: "15px" }}>Chief of Staff</p>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <Image src={laki} alt="laki" />
          <div className={styles.teamName}>
            <h4 style={{ fontWeight: "bold", fontSize: "20px" }} >Mike Doe</h4>
            <p style={{ color: "gray", fontSize: "15px" }}>Head of Product</p>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <div className={styles.moreTeams}>
            <h2 className={styles.moreTeamTitle}>25+</h2>
            <p className={styles.moreTeamWord}>Amazing team members</p>
            <p className={styles.moreTeamWord}>Doing amazing job everyday</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams