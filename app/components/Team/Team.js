import styles from "./Team.module.css";

const Team = () => {
  return (
    <div className={styles.wrapper} id="team">
      <div className={styles.container}>
        <p className={styles.header}>Meet the Team</p>
        <div className={styles.flexContainer}>
          <div className={styles.teamMemberContainer}>
            <div className={styles.imageContainerMike}>
              <p className={styles.title}>Mike</p>
              <p className={styles.subTitle}>Co-Founder @tradelikemike</p>
            </div>
          </div>
          <div className={styles.teamMemberContainer}>
            <div className={styles.imageContainerAustin}>
              <p className={styles.title}>Austin</p>
              <p className={styles.subTitle}>Co-Founder @austinedal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
