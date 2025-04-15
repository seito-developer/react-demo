import styles from "./Display.module.css";

const Display = ({ children }) => {
  return <div className={styles.display}>{children}</div>;
};

export default Display;
