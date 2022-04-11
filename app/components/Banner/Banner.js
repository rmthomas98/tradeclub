import styles from "./Banner.module.css";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>
          Built for Traders<br></br>By Traders
        </p>
        <p className={styles.subHeader}>Premier Day Trading Co-Working Space</p>
        <div className={styles.buttonContainer}>
          <Link to="apply" smooth className={styles.applyBtn}>
            Apply Now
          </Link>
          <Link to="what-we-offer" smooth className={styles.learnMoreBtn}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
