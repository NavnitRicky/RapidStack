import './TeamHero.css';
import { useEffect, useRef, useState } from 'react';
import HeroButton from './HeroButton';
import StatCard from './StatCard';
import SkillCard from './SkillCard';
import TechBadge from './TechBadge';
// import AnimatedBackground from './AnimatedBackground';
import HeroAnimation from './HeroAnimation';

// Mock icons - replace with actual icon library imports
const CodeIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.5 8.5L5 12l3.5 3.5M15.5 8.5L19 12l-3.5 3.5M12 3l-2 18" />
  </svg>
);

const ServerIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
  </svg>
);

const MobileIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4z" />
  </svg>
);

const CloudIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7C20.268 16.057 16.477 19 12 19c-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export default function TeamHero() {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);
  const [expertsCount, setExpertsCount] = useState(0);

  useEffect(() => {
    if (!statsRef.current) return;
    let observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let projectTarget = 50;
    let hoursTarget = 160;
    let expertsTarget = 12;
    let projectInterval, hoursInterval, expertsInterval;

    projectInterval = setInterval(() => {
      setProjectCount(prev => {
        if (prev < projectTarget) return prev + 1;
        clearInterval(projectInterval);
        return projectTarget;
      });
    }, 60);

    hoursInterval = setInterval(() => {
      setHoursCount(prev => {
        if (prev < hoursTarget) return prev + 2;
        clearInterval(hoursInterval);
        return hoursTarget;
      });
    }, 25);

    expertsInterval = setInterval(() => {
      setExpertsCount(prev => {
        if (prev < expertsTarget) return prev + 1;
        clearInterval(expertsInterval);
        return expertsTarget;
      });
    }, 100);

    return () => {
      clearInterval(projectInterval);
      clearInterval(hoursInterval);
      clearInterval(expertsInterval);
    };
  }, [hasAnimated]);

  const StartYourProject = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    {
      icon: CodeIcon,
      title: "Frontend Development",
      description: "React, Next.js, Vue.js, Tailwind CSS, TypeScript"
    },
    {
      icon: ServerIcon,
      title: "Backend Development",
      description: "Node.js, Express, Python, Django, PostgreSQL, MongoDB"
    },
    {
      icon: MobileIcon,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android, Cross-platform"
    },
    {
      icon: CloudIcon,
      title: "DevOps & Cloud",
      description: "AWS, Docker, Kubernetes, CI/CD, Microservices"
    }
  ];

  const technologies = [
    'React', 'Node.js', 'AWS', 'Docker', 'MongoDB', 'GraphQL', 'TypeScript'
  ];

  return (
    <div id="hero" className="team-hero">
      {/* Full-screen hero background - Blank for now */}
      <div
        className="hero-fullscreen-bg"
        onClick={handleViewProjects}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleViewProjects();
          }
        }}
      >
        <HeroAnimation />
        {/* Gradient overlay for text readability */}
        <div className="hero-overlay"></div>

        {/* Navigation Arrows */}
        <button className="hero-nav-arrow hero-nav-prev" aria-label="Previous">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="hero-nav-arrow hero-nav-next" aria-label="Next">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content Container - Left aligned */}
        <div className="hero-content-overlay">
          <h1 className="hero-title-fullscreen">
            I build high-end websites<br />
            for global clients.
          </h1>

          <p className="hero-description-fullscreen">
            Clean UI, motion design, fast performance, and scalable backend — delivered with clear communication and on-time execution.
          </p>

          <div className="hero-video-actions">
            <HeroButton
              variant="secondary"
              onClick={handleViewProjects}
              icon={EyeIcon}
            >
              My Projects
            </HeroButton>

            <HeroButton
              variant="primary"
              onClick={StartYourProject}
              icon={ArrowRightIcon}
            >
              Hire Me
            </HeroButton>
          </div>
        </div>
      </div>

      <div className="hero-container">

        {/* Animated Stats */}
        {/* Animated Stats */}
        <div className="hero-stats" ref={statsRef}>
          <StatCard
            number={projectCount}
            suffix="+"
            label="Projects Completed"
            subLabel="TARGET: EXCEEDED"
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
          />
          <StatCard
            number={hoursCount}
            suffix="+"
            label="Hours/Week Available"
            subLabel="STATUS: ACTIVE"
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            number={expertsCount}
            label="Specialized Experts"
            subLabel="GROWTH: +150%"
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
        </div>

        {/* Skills Grid */}
        <div className="hero-skills">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              animationDelay={`${index * 0.5}s`}
            />
          ))}
        </div>

        {/* Technology Stack - Infinite Marquee (Left to Right) */}
        <div className="tech-marquee-container">
          <div className="tech-marquee-content">
            {/* First Set */}
            {technologies.map((tech, index) => (
              <TechBadge key={`t1-${index}`} name={tech} />
            ))}
            {/* Second Set (Duplicate for seamless loop) */}
            {technologies.map((tech, index) => (
              <TechBadge key={`t2-${index}`} name={tech} />
            ))}
            {/* Third Set (Extra buffer for wide screens) */}
            {technologies.map((tech, index) => (
              <TechBadge key={`t3-${index}`} name={tech} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}