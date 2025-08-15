'use client';

import './Project.css';
import { useState } from 'react';
import WebsiteModal from './WebsiteModal';

export default function ProjectShowcase() {
  const [modalUrl, setModalUrl] = useState(null);
  const projects = [
    {
      id: 1,
      title: "ECommerce Platform",
      category: "Full-Stack Web Application",
      description: "Complete e-commerce solution with React frontend, Node.js backend, and AWS deployment. Features include user authentication, payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay integration", "Hosting"],
      image: "/images/padhaixpress.jpg",
      results: ["50% faster loading times", "99.9% uptime", "Scalable to 10k+ users"]
    },
    {
      id: 2,
      title: "Educational platform ",
      category: "Full stack Development",
      description: "Innovience empowers students with industry-ready internships and exciting hackathons to build skills and showcase talent.",
      technologies: ["Next.js", "React", "Supabase", "Payment integration"],
      // image: "https://readdy.ai/api/search-image?query=Mobile%20project%20management%20app%20interface%20on%20smartphone%2C%20task%20management%20screens%20with%20clean%20UI%2C%20collaborative%20workspace%20design%2C%20modern%20mobile%20app%20with%20purple%20and%20white%20theme&width=600&height=400&seq=mobile1&orientation=landscape",
      image: "/images/innovience.jpg",
      results: ["4.8★ App Store rating", "Cross-platform compatibility", "Real-time collaboration"]
    },
    {
      id: 3,
      title: "FinTech Dashboard",
      category: "Enterprise Web Platform",
      description: "Comprehensive financial analytics dashboard for a fintech startup. Built with Next.js, featuring real-time data visualization, secure authentication, and automated reporting.",
      technologies: ["Next.js", "D3.js", "PostgreSQL", "Docker", "CI/CD"],
      image: "https://readdy.ai/api/search-image?query=Financial%20analytics%20dashboard%20on%20computer%20screen%2C%20charts%20and%20graphs%20displaying%20financial%20data%2C%20modern%20fintech%20interface%20with%20dark%20theme%2C%20professional%20business%20intelligence%20platform&width=600&height=400&seq=fintech1&orientation=landscape",
      results: ["Real-time data processing", "Bank-grade security", "Automated CI/CD pipeline"]
    },
    {
      id: 4,
      title: "Social Learning Platform",
      category: "Educational Web Platform",
      description: "Interactive learning platform with video streaming, live chat, progress tracking, and gamification elements. Built for a client serving 5000+ students.",
      technologies: ["React", "WebRTC", "Socket.io", "MongoDB", "AWS S3"],
      image: "https://readdy.ai/api/search-image?query=Online%20learning%20platform%20interface%20showing%20video%20lessons%20and%20student%20dashboard%2C%20educational%20website%20with%20clean%20design%2C%20interactive%20learning%20environment%20with%20green%20and%20white%20colors&width=600&height=400&seq=learning1&orientation=landscape",
      results: ["5000+ active users", "Live video streaming", "Gamified learning experience"]
    },
    {
      id: 5,
      title: "Healthcare Management System",
      category: "Healthcare Web Application",
      description: "Patient management system for healthcare providers with appointment scheduling, medical records, and telemedicine features. HIPAA compliant with robust security measures.",
      technologies: ["Next.js", "Express", "PostgreSQL", "WebRTC", "HIPAA Compliance"],
      image: "https://readdy.ai/api/search-image?query=Healthcare%20management%20system%20interface%20on%20tablet%2C%20patient%20records%20and%20appointment%20scheduling%2C%20medical%20dashboard%20with%20clean%20professional%20design%2C%20healthcare%20technology%20platform&width=600&height=400&seq=health1&orientation=landscape",
      results: ["HIPAA compliant", "Telemedicine integration", "Improved patient care"]
    },
    {
      id: 6,
      title: "AI Content Generator",
      category: "AI-Powered SaaS Platform",
      description: "Content generation platform using AI APIs with user subscription management, content templates, and team collaboration features. Built during a hackathon and won 1st place.",
      technologies: ["React", "Python", "OpenAI API", "Stripe", "Docker"],
      image: "https://readdy.ai/api/search-image?query=AI%20content%20generation%20platform%20interface%2C%20writing%20assistant%20dashboard%20with%20modern%20UI%2C%20artificial%20intelligence%20tool%20with%20clean%20design%2C%20SaaS%20platform%20with%20blue%20gradient%20theme&width=600&height=400&seq=ai1&orientation=landscape",
      results: ["Hackathon Winner", "AI-powered content", "SaaS subscription model"]
    }
  ];

  return (
    <div id="projects" className="project-showcase">
      <div className="container">
        <div className="section-header">
          <h2>Our Project Portfolio</h2>
          <p>From client projects to hackathon winners, we've delivered diverse solutions across industries with consistent excellence.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">
                  {project.category}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-results">
                  <h4>Key Results</h4>
                  <ul>
                    {project.results.map((result, index) => (
                      <li key={index}>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Example: Add a View Website button for the first project only. Replace with your real URLs as needed. */}
                {project.id === 1 && (
                  <button className="btn primary" style={{marginTop: '1rem'}} onClick={() => setModalUrl('https://padhaixpress.in')}>View Website</button>
                )}
                 {project.id === 2 && (
                  <button className="btn primary" style={{marginTop: '1rem'}} onClick={() => setModalUrl('https://innovience.in')}>View Website</button>
                )}
              </div>
            </div>
          ))}
        </div>
        <WebsiteModal url={modalUrl} open={!!modalUrl} onClose={() => setModalUrl(null)} />
      </div>
    </div>
  );
}