import { NextComponentType } from "next";
import styles from '../styles/Home.module.css'
import ServiceImg1 from '../assets/mk-4.webp'
import ServiceImg2 from '../assets/Mk-5.webp'
import ServiceImg3 from '../assets/mk-6.webp'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const Services: NextComponentType = () => {
  return (
    <div className={styles.services}>
      <h1 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>Our Services & Capabilities</h1>
      <div className={styles.serviceColoumn}>
        <div className={styles.serviceImgContainer}>
          <Image src={ServiceImg1} alt="image" />
        </div>
        <div className={styles.serviceWordContainer}>
          <div>
            <p className={styles.servicesLittleTitle}>Design</p>
            <h3 className={styles.serviceTitle}>Design Thinking</h3>
            <p className={styles.serviceWord}>Design Thinking helps our client focus on your users and their needs to deliver more useful, usable, and desirable solutions.</p>
            <ul style={{ padding: "0" }}>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10px" }} />
                <p className={styles.listWord}>
                  Identify users pain points.
                </p>
              </li>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10px" }} />
                <p className={styles.listWord} >
                  Define user personas.
                </p>
              </li>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10px" }} />
                <p className={styles.listWord}>
                  Brainstorm on solutions.
                </p>
              </li>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10px" }} />
                <p className={styles.listWord}>
                  Identify hypotheses and experiments.
                </p>
              </li>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10px" }} />
                <p className={styles.listWord}>
                  Define Minimum Viable Product (MVP).
                </p>
              </li>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10px" }} />
                <p className={styles.listWord}>
                  Explore technical solution architecture, including hybrid cloud architecture and potential integration points using Cloud as the platform for the solution.
                </p>
              </li>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10xp" }} />
                <p className={styles.listWord}>
                  Create conceptual design using wireframes until playable mock-up, if applicable.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.serviceColoumnReverse}>
        <div className={styles.serviceImgContainer}>
          <Image src={ServiceImg2} alt="image" />
        </div>
        <div className={styles.serviceWordContainer}>
          <div>
            <p className={styles.servicesLittleTitle}>Smart Notification</p>
            <h3 className={styles.serviceTitle}>Apps Development & Managed Service</h3>
            <p className={styles.serviceWord}>Our engineer team can support our client to develop their MVP apps using modern technique on web, mobile, native/hybrid and blockchain technologies. We can adapt to various development approach using project based or agile scrum methodology.</p>
            <ul style={{ padding: "0" }}>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10px" }} />
                <p className={styles.listWord}>
                  Our goal build and manage a production application that is fully tested, with users validated and deployed to production, and to empower your team so that you can evolve. build the next iteration of the MVP by yourself or engage us further to iterate and scale
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.serviceColoumn}>
        <div className={styles.serviceImgContainer}>
          <Image src={ServiceImg3} alt="image" />
        </div>
        <div className={styles.serviceWordContainer}>
          <div>
            <p className={styles.servicesLittleTitle}>System</p>
            <h3 className={styles.serviceTitle}>System Integrator​</h3>
            <p className={styles.serviceWord}>We also help customer to integrated to existing solution available in the solution marketplace. With our official partnership with several principal we also offer fully integration with our solution business partners if needed as one stop solution offering. </p>
            <ul style={{ padding: "0" }}>
              <li className={styles.listStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: "10px" }} />
                <p className={styles.listWord}>
                  Leverage ready to use solution available in the market, we can speed up client go to market initiative.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services