function Home() {
  return (
    <section className="hero-section">
      <div className="profile-hero">
        <div className="profile-avatar">
          <img src="/assets/profile.png" alt="Vedant Profile" />
        </div>
        <div className="profile-content">
          <h1>Vedant</h1>
          <p className="typewriter">Software Engineer</p>
        </div>
      </div>
      
      <div className="description">
        <p>
          I turn creative ideas into powerful web applications <em>(quickly)</em> using modern technologies, 
          focused on performance and user experience.
        </p>
        
        <p>
          Currently I am working as a Full Stack Developer at <strong>TechCorp</strong> building scalable web applications. 
          I have built multiple projects in past 3 years. <strong>Passionate about clean code</strong> 
          and building products that make a difference.
        </p>
        
        <p>
          My go-to stack is ReactJS, TypeScript, Node.js, Python, PostgreSQL, 
          MongoDB, and modern CSS frameworks.
        </p>
        
        <p>
          You can talk to me about <strong>web development, new technologies, coding, or anything else</strong>.
          Say a Hi on <strong>X</strong>
        </p>
      </div>
      
      <div className="social-section">
        <h3>Connect with me</h3>
        <div className="social-links">
          <a href="https://x.com/__vedant1" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="material-icons social-icon">tag</span>
            X
          </a>
          <a href="https://linkedin.com/in/vedantraghuwanshi" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="material-icons social-icon">business</span>
            LinkedIn
          </a>
          <a href="https://github.com/007vedant" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="material-icons social-icon">code</span>
            Github
          </a>
          <a href="https://instagram.com/vedant.o7" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="material-icons social-icon">photo_camera</span>
            Instagram
          </a>
          <a href="mailto:rvedant.dev@gmail.com" className="social-link">
            <span className="material-icons social-icon">alternate_email</span>
            Mail
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home