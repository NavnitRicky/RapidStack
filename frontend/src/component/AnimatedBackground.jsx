import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  return (
    <>
      {/* Animated Background Elements */}
      <div className={styles.heroBackground}>
        <div className={`${styles.bgElement} ${styles.bgElement1}`}></div>
        <div className={`${styles.bgElement} ${styles.bgElement2}`}></div>
        <div className={`${styles.bgElement} ${styles.bgElement3}`}></div>
        <div className={`${styles.bgElement} ${styles.bgElement4}`}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className={styles.gridOverlay}></div>
    </>
  );
}