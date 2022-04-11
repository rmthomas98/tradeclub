import styles from "./Team.module.css";
import {Fade} from 'react-awesome-reveal'

const Team = () => {
  return (
    <div className={styles.wrapper} id="team">
      <div className={styles.container}>
        <Fade direction="up">
        <p className={styles.header}>Meet the Team</p>
        </Fade>
        <div className={styles.flexContainer}>
          <div className={styles.teamMemberContainer}>
          <Fade direction="up">
            <div className={styles.imageContainerMike}>
              <p className={styles.title}>Mike</p>
              <p className={styles.subTitle}>Co-Founder @tradelikemike</p>
            </div>
            </Fade>
          </div>
          <div className={styles.teamMemberContainer}>
            <Fade direction="up">
            <div className={styles.imageContainerAustin}>
              <p className={styles.title}>Austin</p>
              <p className={styles.subTitle}>Co-Founder @austinedal</p>
            </div>
          </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
