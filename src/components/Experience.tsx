function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Harness",
      companyUrl: "https://www.harness.io/",
      period: "Mar 2025 - Present",
      logoUrl: "https://logo.clearbit.com/harness.io",
      description: "Building SaaS products around Supply Chain Security and Security Testing Orchestration with > $2 million ARR.",
      responsibilities: [
        "Developed AI Agent with MCP integration to perform security workflows on customer's behalf using natural language.",
        "Redesigned underlying database of the product to serve high throughput writes and read queries with <100 ms latency.",
      ],
      techStack: ["Go", "Java", "Elasticsearch", "MongoDB", "PostgreSQL", "LLMs", "MCP", "Docker", "Kubernetes", "GCP", "Grafana"]
    },
    {
      id: 2,
      title: "Software Development Enginner - II",
      company: "Amazon",
      companyUrl: "https://www.amazon.com/",
      period: "Jul 2022 - Feb 2025",
      logoUrl: "https://logo.clearbit.com/amazon.com",
      description: "Built realtime price prediction systems and automated accounting platform for > $4.5 billion of shipping expenses per month across various Amazon businesses.",
      responsibilities: [
        "Developed near-realtime streaming services operating at >20k TPS performing live predictions of shipping prices.",
        "Designed large scale datalake serving > 4TBs of data per day to process historical data for training ML models.",
        "Developed high performance big data microservice processing ~15 billion transactions per month for middle mile shipping network."
      ],
      techStack: ["Java", "Python", "Scala", "Apache Spark", "Apache Hudi", "DynamoDB", "Elasticsearch", "Redshift", "SNS", "SQS", "Kinesis", "Lambda", "AWS"]
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "Cloud Native Computing Foundation (CNCF)",
      companyUrl: "https://lfx.linuxfoundation.org/tools/mentorship/",
      period: "Mar 2022 - May 2022",
      logoUrl: "https://avatars.githubusercontent.com/u/13455738?s=280&v=4",
      description: "Selected for the prestigious LFX Mentorship Program and worked with Kubernetes's opensource maintainers.",
      responsibilities: [
        "Developed Elekto, an open-source web platform, used by orgs across CNCF like Kubernetes, OpenTelemetry to conduct elections online.",
        "Created highly performant encryption workflow to secure the integrity of casted ballots and secure the platform during elections.",
      ],
      techStack: ["Python", "Flask", "Javascript", "PostgreSQL", "NaCl", "GitOps", "Docker"]
    },
    {
      id: 4,
      title: "Software Engineer Intern",
      company: "Samsung Research",
      companyUrl: "https://research.samsung.com/sri-b",
      period: "May 2021 - Jul 2021",
      logoUrl: "https://logo.clearbit.com/samsung.com",
      description: "Built features for 5G and 4GLTE cloud based mobile networks.",
      responsibilities: [
        "Developed IP throughput calculation feature for 4G LTE and 5G vRAN software used in cloud mobile networks for customers like AT&T and Verizon.",
      ],
      techStack: ["C", "C++", "Linux"]
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
                  <img src={exp.logoUrl} alt={`${exp.company} logo`} />
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