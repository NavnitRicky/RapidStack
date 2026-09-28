import styles from './SkillCard.module.css';

export default function SkillCard({ 
  icon: Icon, 
  title, 
  description, 
  className = '',
  animationDelay = '0s'
}) {
  return (
    <div 
      className={`${styles.skillCard} ${className}`}
      style={{ animationDelay }}
    >
      <div className={styles.iconContainer}>
        <Icon className={styles.skillIcon} />
      </div>
      <h3 className={styles.skillTitle}>{title}</h3>
      <p className={styles.skillDescription}>{description}</p>
    </div>
  );
}