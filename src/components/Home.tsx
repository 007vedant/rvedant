import { useState, useEffect } from 'react'

function Home() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = ["Software Engineer", "Master Tinkerer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 4000) // Change every 4 seconds to match animation duration

    return () => clearInterval(interval)
  }, [])

  const getAnimationClass = (titleIndex: number) => {
    return titleIndex === 0 ? 'typewriter-software' : 'typewriter-master'
  }

  return (
    <section className="hero-section">
      <div className="profile-hero">
        <div className="profile-avatar">
          <img src="/assets/profile.png" alt="Vedant Profile" />
        </div>
        <div className="profile-content">
          <h2>Hi 👋 </h2>
          <h1>I'm Vedant</h1>
          <p key={currentTitle} className={`typewriter ${getAnimationClass(currentTitle)}`}>{titles[currentTitle]}</p>
        </div>
      </div>
      
      <div className="description">
        <p>
          I'm a software engineer with over <strong>3 years of experience</strong> in building large scale systems and rapidly growing B2B SaaS products at Big Tech firms and startups. My expertise 
          lies in developing massive throughput and highly available backend systems across variety of frameworks and cloud technologies.
          I love working on challenging engineering problems with strong impact and core business values. 
        </p>
        
        <p>
          Currently, I am working as a <strong> Senior Software Engineer at Harness</strong> where I'm shipping features for <a href="https://www.harness.io/products/supply-chain-security" target="_blank"> Supply Chain Security</a> and <a href="https://www.harness.io/products/security-testing-orchestration" target="_blank"> Security Testing Orchestration</a> products, serving some of the industry's leading enterprises.
        </p>
        
        <p>
          My interests include backend engineering, databases, cloud, large language models (LLMs) and AI agents.
        </p>
        
        <p>
          Outside of work, I enjoy playing lawn tennis & football, reading books, watching movies & F1 and travelling. I'm a big <a href="https://starwarsintrogenerator.com/scroller?u=23oc3l53" target="_blank">Star Wars Nerd</a> and DC Fanboy and would be up for a conversation always!
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