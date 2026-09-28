import styles from './StatCard.module.css';

export default function StatCard({ number, label, suffix = '', icon, subLabel, className = '' }) {
  return (
    <div className={`${styles.statCard} ${className}`}>
      {icon && (
        <div className={styles.iconWrapper}>
          <div className={styles.iconInner}>
            {icon}
          </div>
        </div>
      )}

      <div className={styles.contentWrapper}>
        <div className={styles.statNumberWrapper}>
          <span className={styles.statNumber}>{number}</span>
          <span className={styles.statSuffix}>{suffix}</span>
        </div>
        <span className={styles.statLabel}>{label}</span>
      </div>

      {subLabel && (
        <div className={styles.subLabel}>
          {subLabel}
        </div>
      )}

      {/* Decorative corners */}
      <div className={styles.cornerTopLeft}></div>
      <div className={styles.cornerBottomRight}></div>
    </div>
  );
}