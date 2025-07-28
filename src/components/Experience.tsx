function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Coming Soon",
      company: "Company Name",
      companyUrl: "#",
      period: "Date Range",
      logo: "Logo",
      description: "Coming soon - experience description will be added here.",
      responsibilities: [
        "Coming soon - responsibilities will be added here",
        "Coming soon - more details will be added here",
        "Coming soon - additional information will be added here"
      ],
      techStack: ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"]
    },
    {
      id: 2,
      title: "Coming Soon",
      company: "Company Name",
      companyUrl: "#",
      period: "Date Range",
      logo: "Logo",
      description: "Coming soon - experience description will be added here.",
      responsibilities: [
        "Coming soon - responsibilities will be added here",
        "Coming soon - more details will be added here",
        "Coming soon - additional information will be added here"
      ],
      techStack: ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"]
    }
  ]

  return (
    <div className="experience-page">
      <div className="experience-header">
        <h1>Vedant's Journey</h1>
        <p>A timeline of my professional experiences.</p>
      </div>
      
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-content">
              <div className="experience-main">
                <div className="experience-title-section">
                  <h3>
                    {exp.title} at{' '}
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="company-link">
                      {exp.company}
                    </a>
                  </h3>
                  <p className="experience-period">{exp.period}</p>
                </div>
                
                <div className="experience-logo">
                  <span>{exp.logo}</span>
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
              
              <div className="tech-stack-section">
                <h4>Tech Stack</h4>
                <div className="tech-stack">
                  {exp.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience