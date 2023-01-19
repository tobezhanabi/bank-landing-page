import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu totro, pruere jme oedii sed yo touyr tf is apir uhhde9ufg srd
        oihdnohf asdj asjhurkjud aduhucfvjbc nf skljd sj soid idisd poanf
        hduochs he ehopiusdjo rold sjhuh as sd d uhfs
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
