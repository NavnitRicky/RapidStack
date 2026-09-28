import styles from './TechBadge.module.css';

export default function TechBadge({ name, className = '' }) {
  return (
    <div className={`${styles.techBadge} ${className}`}>
      <span className={styles.techName}>{name}</span>
    </div>
  );
}