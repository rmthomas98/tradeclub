import styles from "./Apply.module.css";

const Apply = () => {
  return (
    <div className={styles.wrapper} id="apply">
      <form className={styles.container}>
        <p className={styles.header}>Apply Now</p>
        <p className={styles.subHeader}>
          Apply below for a Trading Desk. First come, first serve!
        </p>
        <div className={styles.nameContainer}>
          <div className={styles.inputContainer} style={{ marginRight: 20 }}>
            <p className={styles.label}>First Name</p>
            <input
              type="text"
              className={styles.input}
              placeholder="First Name"
            />
          </div>
          <div className={styles.inputContainer}>
            <p className={styles.label}>Last Name</p>
            <input
              type="text"
              className={styles.input}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.label}>Email</p>
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.inputContainer} style={{ marginRight: 20 }}>
            <p className={styles.label}>Phone</p>
            <input className={styles.input} placeholder="Phone Number" />
          </div>
          <div className={styles.inputContainer}>
            <p className={styles.label}>How long have you been trading?</p>
            <select className={styles.input}>
              <option>I haven&#39;t began trading yet</option>
              <option>Less than 1 year</option>
              <option>1-2 Years</option>
              <option>3-4 Years</option>
              <option>5+ Years</option>
            </select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.label}>
            In what market do you have experience trading?
          </p>
          <input
            type="text"
            className={styles.input}
            placeholder="(Stocks, Crypto, Futures, FX, etc.)"
          />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.label}>Where are you currently based?</p>
          <input
            type="text"
            className={styles.input}
            placeholder="(City, State, Country)"
          />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.label}>
            Please explain your interest in Trade Club
          </p>
          <textarea
            className={styles.textarea}
            placeholder="Write a short message explaining your interest in Trade Club."
          />
        </div>
        <div className={styles.inputContainer} style={{ maxWidth: 300 }}>
          <p className={styles.label}>Desired Membership Length?</p>
          <select className={styles.input}>
            <option>1 Week / $997</option>
            <option>3 Months / $2999 Per Month</option>
            <option>6 Months / $2499 Per Month</option>
            <option>12 Months / $1999 Per Month</option>
          </select>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
