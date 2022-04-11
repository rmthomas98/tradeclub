import styles from "./Offer.module.css";
import { BsCheck } from "react-icons/bs";
import {Fade, Cascade} from 'react-awesome-reveal';

const Offer = () => {
  return (
    <div className={styles.wrapper} id="what-we-offer">
      <div className={styles.container}>
        <Fade direction="up">
        <p className={styles.header}>What We Offer</p>
        </Fade>
        <Fade direction="up">
        <p className={styles.subHeader}>
          Trade Club is a contemporary co-working space that provides the
          ultimate edge over the average retail trader.
        </p>
        </Fade>
        <div className={styles.flexContainer}>
          <div className={styles.imageLeftSideContainer}>
          <Fade direction="left">
            <div className={`${styles.imageContainer} ${styles.atmosphere}`}>
              {/* <Image
                src={atmosphere}
                layout="fixed"
                height={width > 895 ? 350 : 280}
                width={width > 895 ? 500 : 400}
              /> */}
            </div>
          </Fade>
          </div>
          <div className={styles.infoContainer}>
            <Fade direction="up">
            <p className={styles.title}>Professional Atmosphere</p>
            </Fade>
          <Fade direction="up">
            <p className={styles.smallDescription}>
              Trading is a lonely game, we all know that. But, the conflicting
              thing is that your key to truly succeeding in this industry is
              learning from others and surrounding yourself with a strong
              community. At Trade Cub, we are selective with who gets a set at
              the table to ensure you are surrounded by like-minded, sharp, and
              hungry individuals day in and day out, as well as having access to
              our team of professional traders and mentors during the trading
              day.
            </p>
        </Fade>
          </div>
        </div>
        <div className={`${styles.flexContainer} ${styles.columnReverse}`}>
          <div className={styles.infoContainer}>
            <Fade direction="up">
            <p className={styles.title}>High-End Technology</p>
            </Fade>
            <Fade direction="up">
            <p className={styles.smallDescription}>
              Having the right technology at your fingertips can mean the
              difference between a winning trade and a losing trade. We have
              already spent thousands of dollars and hundreds of hours
              researching the best trading setups so you can walk right into
              your dream setup. At every desk we offer:
            </p>
            </Fade>
            <Fade cascade direction="left" damping={0.3} delay={700}>
            <div className={styles.itemContainer} style={{ marginTop: 20 }}>
              <BsCheck style={{ marginRight: 5, minWidth: 20 }} />
              <p className={styles.smallestDescription}>
                State of the Art High-Performance Trading PCs tailormade by Dell
              </p>
            </div>
            <div className={styles.itemContainer}>
              <BsCheck style={{ marginRight: 5, minWidth: 20 }} />
              <p className={styles.smallestDescription}>
                Multiple Monitor Displays (Dell 27” 165Hz Monitors offered in 2
                or 3 screen configurations)
              </p>
            </div>
            <div className={styles.itemContainer}>
              <BsCheck style={{ marginRight: 5 }} />
              <p className={styles.smallestDescription}>
                Backup Power Supplies in case of a power outage
              </p>
            </div>
            <div className={styles.itemContainer}>
              <BsCheck style={{ marginRight: 5 }} />
              <p className={styles.smallestDescription}>
                2 Fiber Optic Internet Options (1GB/1GB and 2GB/2GB)
              </p>
            </div>
            </Fade>
          </div>
          <div className={styles.imageRightSideContainer}>
            <Fade direction="right">
            <div className={`${styles.imageContainer} ${styles.tech}`}>
              {/* <Image
                src={technology}
                layout="fixed"
                height={width > 895 ? 350 : 280}
                width={width > 895 ? 500 : 400}
              /> */}
            </div>
            </Fade>
          </div>
        </div>
        <div className={styles.flexContainer} style={{ marginBottom: 0 }}>
          <div className={styles.imageLeftSideContainer}>
            <Fade direction="left">
            <div className={`${styles.imageContainer} ${styles.amenities}`}>
              {/* <Image
                src={amenities}
                layout={width > 800 ? "fixed" : "responsive"}
                height={width > 895 ? 350 : 280}
                width={width > 895 ? 500 : 400}
              /> */}
            </div>
            </Fade>
          </div>
          <div className={styles.infoContainer}>
            <Fade direction="up">
            <p className={styles.title}>Unrivaled Amenities</p>
            </Fade>
            <Fade direction="up">
            <p className={styles.smallDescription}>
              We are all about giving our members an edge that 99% of the
              competition is lacking. That is why we made the focal point of our
              amenities aid in not only the strategy growth of every individual
              trader, but more importantly the improvement of their health,
              wellness, and mentality. As a member you will get access to:
            </p>
            </Fade>
            <Fade cascade direction="right" delay={700} damping={0.3}>
            <div className={styles.itemContainer} style={{ marginTop: 20 }}>
              <BsCheck style={{ marginRight: 5, minWidth: 20 }} />
              <p className={styles.smallestDescription}>
                Our In-house Trading Psychologist
              </p>
            </div>
            <div className={styles.itemContainer}>
              <BsCheck style={{ marginRight: 5, minWidth: 20 }} />
              <p className={styles.smallestDescription}>Lounge & Dining Area</p>
            </div>
            <div className={styles.itemContainer}>
              <BsCheck style={{ marginRight: 5, minWidth: 20 }} />
              <p className={styles.smallestDescription}>
                Organic Cold-Pressed Juices & Snacks
              </p>
            </div>
            <div className={styles.itemContainer}>
              <BsCheck style={{ marginRight: 5, minWidth: 20 }} />
              <p className={styles.smallestDescription}>
                Independent Key Fob Access
              </p>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
