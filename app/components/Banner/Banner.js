import styles from "./Banner.module.css";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Fade direction="up" delay={200}>
          <p className={styles.header}>
            Built for Traders<br></br>By Traders
          </p>
        </Fade>
        <Fade direction="up" delay={1000}>
          <p className={styles.subHeader}>
            Premier Day Trading Co-Working Space
          </p>
        </Fade>
        <Fade direction="up" delay={1200}>
          <div className={styles.buttonContainer}>
            <Link to="apply" smooth className={styles.applyBtn}>
              Apply Now
            </Link>
            <Link to="what-we-offer" smooth className={styles.learnMoreBtn}>
              Learn More
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
