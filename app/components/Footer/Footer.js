import styles from "./Footer.module.css";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.companyInfo}>
            <Image src={logo} height={70} width={140} />
            <p className={styles.copyright}>
              &copy; Trade Club 2022. All Rights Reserved
            </p>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.sectionContainer}>
              <p className={styles.title}>Location</p>
              <p
                className={styles.smallestDescription}
                style={{ marginTop: 15 }}
              >
                1040 Collier Center Way
              </p>
              <p className={styles.smallestDescription}>Naples, FL 34110</p>
            </div>
            <div className={styles.sectionContainer}>
              <p className={styles.title}>Contact</p>
              <p
                className={styles.smallestDescription}
                style={{ marginTop: 15 }}
              >
                apply@tradeclub.net
              </p>
            </div>
            <div className={styles.sectionContainer} style={{ marginRight: 0 }}>
              <p className={styles.title}>Socials</p>
              <a
                href="https://instagram.com/tradeclubofficial"
                target="_blank"
                rel="noreferrer"
                className={styles.instagram}
              >
                <FaInstagram style={{ marginRight: 7 }} />
                <p className={styles.smallestDescription}>Instagram</p>
              </a>
            </div>
          </div>
        </div>
        <p className={styles.copyrightBottom}>
          &copy; Trade Club 2022. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
