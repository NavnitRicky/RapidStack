import styles from './HeroButton.module.css';

export default function HeroButton({ 
  variant = 'primary', 
  children, 
  onClick, 
  icon: Icon,
  className = '',
  ...props 
}) {
  return (
    <button 
      className={`${styles.heroButton} ${styles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {Icon && <Icon className={styles.buttonIcon} />}
    </button>
  );
}