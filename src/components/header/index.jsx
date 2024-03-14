import Logo from "../../assets/Nu Kenzie.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <img src={Logo} alt="Logo Nu Kenzie" />
        </div>
      </div>
    </header>
  );
};
