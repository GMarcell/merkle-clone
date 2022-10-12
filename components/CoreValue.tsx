import { NextComponentType } from "next";
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCreditCard, faLightbulb, faPaperPlane, faExpand } from '@fortawesome/free-solid-svg-icons'

const CoreValue: NextComponentType = () => {
  return (
    <div className={styles.coreValue}>
      <h2 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>Our Core Values</h2>
      <div className="3-coloumn">
        <div className={styles.coreItem}>
          <FontAwesomeIcon icon={faPenToSquare} size="3x" />
          <h2>Intergrity</h2>
          <p style={{ color: "gray", fontSize: "15px" }}>Always present, connecting with transparency, dignity and mutual respect.</p>
        </div>
        <div className={styles.coreItem}>
          <FontAwesomeIcon icon={faExpand} size="3x" />
          <h2>Reliable Innovative</h2>
          <p style={{ color: "gray", fontSize: "15px" }}>Be Adventurous, Creative, and Open-Minded in in order to deliver solution that having value add to customer and consistently good in quality and performance.</p>
        </div>
        <div className={styles.coreItem}>
          <FontAwesomeIcon icon={faPaperPlane} size="3x" />
          <h2>Accountable</h2>
          <p style={{ color: "gray", fontSize: "15px" }}>Delivering our very best in all we do, holding ourselves accountable for results.</p>
        </div>
      </div>
      <div className="2-coloumn">
        <div className={styles.coreItem}>
          <FontAwesomeIcon icon={faLightbulb} size="3x" />
          <h2>Mindfulness</h2>
          <p style={{ color: "gray", fontSize: "15px" }}>Proactively becomes a thoughtful, cognitive exercise, rather than an impulsive reaction to immediate needs.</p>
        </div>
        <div className={styles.coreItem}>
          <FontAwesomeIcon icon={faCreditCard} size="3x" />
          <h2>Always Synergy</h2>
          <p style={{ color: "gray", fontSize: "15px" }}>Build a positive productive team and family spirit for constant improvement with collaborative and collective work.</p>
        </div>
      </div>
    </div>
  )
}

export default CoreValue;