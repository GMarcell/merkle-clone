import { NextComponentType } from "next";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Grab from '../assets/GrabLogo.webp'
import Djarum from '../assets/DjarumLogo.webp'
import Ismaya from '../assets/IsmayaLogo.webp'
import Moka from '../assets/MokaLogo.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const News: NextComponentType = () => {
  return (
    <div className={styles.news}>
      <div className={styles.bannerContainer}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image src={Grab} alt="grab" />
        </div>
        <div>
          <div className={styles.banner}>
            <div className={styles.bannerGrab}>
              <p>
                Innovative strategies
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image src={Moka} alt="grab" />
        </div>
        <div>
          <div className={styles.banner}>
            <div className={styles.bannerMoka}>
              <p>
                Strategic insight
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image src={Ismaya} alt="grab" />
        </div>
        <div>
          <div className={styles.banner}>
            <div className={styles.bannerIsmaya}>
              <p>
                Personalized tactics
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image src={Djarum} alt="grab" />
        </div>
        <div>
          <div className={styles.banner}>
            <div className={styles.bannerDjarum}>
              <p>
                Result-Oriented Solution
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News