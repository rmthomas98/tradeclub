import styles from "./Nav.module.css";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={logo} height={70} width={140} />
        <div className={styles.linkContainer}>
          <Link smooth className={styles.link} to="what-we-offer">
            What We Offer
          </Link>
          <Link smooth className={styles.link} to="team">
            Team
          </Link>
          <Link smooth className={styles.link} to="memberships">
            Memberships
          </Link>
          <Link smooth to="apply" className={styles.applyBtn}>
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
