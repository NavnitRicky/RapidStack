import './TeamMember.css';

export default function TeamMembers() {
  const teamMembers = [
  
    {
      id: 1,
      name: "Navnit kumar (Team Lead)",
      role: "Frontend Developer",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "UI/UX"],

      experience: "2+ years",
      image: "images/navnit.jpg",
      description: "Crafting beautiful, responsive interfaces that users love. Specialized in modern React ecosystems and pixel-perfect implementations."

    },
      {
      id: 2,
      name: "Rohit kumar singh",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],

      experience: "3+ years",
      image: "images/rohit.jpg",
      description: "Building robust, scalable server architectures. Expert in API design, database optimization, and system performance."
    },
    {
      id: 4,
      name: "Priyanka kumari",
      role: "DevOps Engineer && Tester",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      experience: "2+ years",
      image: "images/priyanka.jpg",
      description: "Ensuring smooth deployments and reliable infrastructure. Specializes in cloud architecture and automated deployment pipelines."
    },
  {
  id: 5,
  name: "Raushan kumar",
  role: " Debuger",
  skills: ["Postman", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  experience: "2+ years",
  image: "images/raushan.jpg",
  description: "Ensuring smooth deployments and reliable infrastructure. Specializes in cloud architecture and automated deployment pipelines."
}
];

  return (
    <div id="team" className="team-members">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Expert Team</h2>
          <p>Each team member brings specialized expertise and years of experience to deliver exceptional results for your project.</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-info">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="member-image"
                />
                <div className="member-details">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  {/* <p>{member.description}</p> */}
                  
                  <div className="member-stats">
                    <span className="experience">{member.experience}</span>
                    
                    <div className="skills">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-features">
          <h3>Why Choose Our Team?</h3>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h4>Highly Communicative</h4>
              <p>Regular updates and transparent communication throughout the project lifecycle.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h4>30+ Hours/Week</h4>
              <p>Collectively available for dedicated project work and quick turnarounds.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Results-Driven</h4>
              <p>Focus on delivering measurable outcomes and exceeding client expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}