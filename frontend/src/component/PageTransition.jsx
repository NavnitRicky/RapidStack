import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import styles from './PageTransition.module.css';

const PageTransition = () => {
    const [loading, setLoading] = useState(false);
    // const location = useLocation();

    useEffect(() => {
        // Check if we've already shown the intro
        const hasVisited = sessionStorage.getItem('rapidstack_visited');

        if (!hasVisited) {
            setLoading(true);
            sessionStorage.setItem('rapidstack_visited', 'true');

            // Simulate initialization time
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1500); // 1.5s duration
            return () => clearTimeout(timer);
        } else {
            // Instant loading for subsequent navigations
            setLoading(false);
        }
    }, []); // Run only on mount, not location change

    if (!loading) return null;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <div className={styles.brainIcon}>
                        {/* Simple SVG Brain/Chip Icon */}
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 2C9.5 3.10457 10.3954 4 11.5 4H12.5C13.6046 4 14.5 3.10457 14.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M9.5 22C9.5 20.8954 10.3954 20 11.5 20H12.5C13.6046 20 14.5 20.8954 14.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M2 9.5C3.10457 9.5 4 10.3954 4 11.5V12.5C4 13.6046 3.10457 14.5 2 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M22 9.5C20.8954 9.5 20 10.3954 20 11.5V12.5C20 13.6046 20.8954 14.5 22 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
                            <path d="M9 10C9 10 10 9 12 9C14 9 15 10 15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M9 14C9 14 10 15 12 15C14 15 15 14 15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <h1 className={styles.title}>RapidStack</h1>
                <div className={styles.loader}>
                    <span className={styles.loaderText}>INITIALIZING INTELLIGENCE</span>
                    <div className={styles.loaderBar}>
                        <div className={styles.loaderProgress}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTransition;
