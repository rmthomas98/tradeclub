import styles from "./Memberships.module.css";

const Memberships = () => {
  return (
    <div className={styles.wrapper} id="memberships">
      <div className={styles.container}>
        <p className={styles.header}>Membership Options</p>
        <div className={styles.flexContainer}>
          <div className={styles.childContainer}>
            <p className={styles.largeTitle}>$997</p>
            <p className={styles.title}>1 Week Access</p>
            <p className={styles.smallDescription}>
              Join us for an entire trading week at Trade Club for a test run.
              This is our most popular option for those who want to see what we
              are all about and spend a week in one of the highest level trading
              atmospheres out there.
            </p>
          </div>
          <div className={styles.childContainer}>
            <p className={styles.largeTitle}>$2,999/mo</p>
            <p className={styles.title}>3-Month Access Plan</p>
            <p className={styles.smallDescription}>
              For those who are planning on spending a few months with us during
              the summer or winter, this is a perfect option for you. This
              option gives you three months of access to our floor, your desk,
              and our amenities.
            </p>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.childContainer}>
            <p className={styles.largeTitle}>$2,499/mo</p>
            <p className={styles.title}>6-Month Access Plan</p>
            <p className={styles.smallDescription}>
              Grabbing a desk for half of a year will help you grow your network
              drastically, sharpen your skills, own your health & wellness, and
              ultimately take that next step up in your trading career.
            </p>
          </div>
          <div className={styles.childContainer}>
            <p className={styles.largeTitle}>$1,999/mo</p>
            <p className={styles.title}>12-Month Access Plan</p>
            <p className={styles.smallDescription}>
              Joining us at Trade Club for an entire year will give you the
              transformation you have been dreaming of. Our high-end technology,
              amenities, and professional community will be behind you for an
              entire year. Make Trade Club your second home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberships;
