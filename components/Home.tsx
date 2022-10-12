import { NextComponentType } from "next";
import Navbar from "./Navbar";
import { faCircle, faRightLong, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

const HomeSection: NextComponentType = () => {
  return (
    <section id='Home' className={styles.Home}>
      <Navbar />
      <div className='container'>
        <div className='left'>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
            <FontAwesomeIcon icon={faCircle} style={{ color: "#6ec1e4", marginRight: "15px" }} />
            <p style={{ margin: "0", fontSize: "14px", letterSpacing: "2px", fontWeight: "bold" }}>ON - DEMAND</p>
          </div>
          <div>
            <h1 style={{ fontWeight: "bold", fontSize: "48px", marginBottom: "30px" }}>Creative & Innovative Ideas</h1>
            <p style={{ fontSize: "14px", marginBottom: "50px" }}>2002, Columbus, Ohio; an early team of Merkle Innovation was formed by some Indonesia diaspora aiming to transform enterprise technology.</p>
            <div className={styles.homeButtons}>
              <button className={styles.letsRollButton}>Let&#39;s Roll</button>
              <button className={styles.viewJourneyButton}>
                View All Journey
                <FontAwesomeIcon icon={faRightLong} />
              </button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.media}>
              <button style={{ borderRadius: "50%", padding: "20px 25px", border: "none", backgroundColor: "#6ec1e4", color: "#e0f3ff" }}>
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection