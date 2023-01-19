import styles from "../styles";
import Button from "./Button";
const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}`}
  >
    <div>
      <h2>Let's try our service now!</h2>
      <p>
        Everything you need to accept card payments and grow your business
        anywhere on the planet
      </p>
    </div>
    <div>
      <Button />
    </div>
  </section>
);

export default CTA;
