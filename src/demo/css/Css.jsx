import styles from "./scroll.module.css";

export const Css = () => {
  return (
    <div>
      {/* css */}
      <h1>cssで定義</h1>
      <div>
        {/* CSSmodule */}
        <h1>CSSmoduleで定義</h1>
        <div className={`${styles.oyaStyle} ${styles.test}`}>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
          <h2 className={styles.childStyle}>aaaa</h2>
        </div>
      </div>
    </div>
  );
};
