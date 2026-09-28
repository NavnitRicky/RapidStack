import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  const goToTeamPage = () => {
    navigate('/team');
    setIsMobileMenuOpen(false);
    // Ensure we start at top after route change
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠', action: () => {
      if (window.location.pathname !== '/') navigate('/#hero');
      else scrollToSection('hero');
    } },
    { id: 'projects', label: 'Projects', icon: '💼', action: () => {
      if (window.location.pathname !== '/') navigate('/#projects');
      else scrollToSection('projects');
    } },
    { id: 'process', label: 'Process', icon: '⚙️', action: () => {
      if (window.location.pathname !== '/') navigate('/#process');
      else scrollToSection('process');
    } },
    { id: 'contact', label: 'Contact', icon: '📞', action: () => {
      if (window.location.pathname !== '/') navigate('/#contact');
      else scrollToSection('contact');
    } },
    { id: 'team', label: 'Team', icon: '👥', action: goToTeamPage },
    { id: 'schedule', label: 'Schedule a Call', icon: '🗓️', action: () => {
      navigate('/schedule-call');
      setIsMobileMenuOpen(false);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    } }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <button onClick={() => navigate('/')} className="logo-button">
            <div className="logo-icon">🚀</div>
            <h1>Rapid Stack</h1>
          </button>
        </div>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button 
                  onClick={item.action}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Get Started
          </button>
          
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 