import { useState, useEffect } from 'react'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics: string[]
  updated_at: string
  stargazers_count: number
  forks_count: number
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  repoUrl: string
  stars: number
  forks: number
  lastUpdated: string
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const GITHUB_USERNAME = '007vedant'
  
  const FEATURED_REPOS = ['SbomGen', 'Elixir', 'hephaestus', 'elekto']

  useEffect(() => {
    fetchGitHubProjects()
  }, [])

  const fetchGitHubProjects = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories')
      }

      const repos: GitHubRepo[] = await response.json()
      
      // Filter repos if FEATURED_REPOS is specified
      const filteredRepos = FEATURED_REPOS.length > 0 
        ? repos.filter(repo => FEATURED_REPOS.includes(repo.name))
        : repos.filter(repo => !repo.name.includes(GITHUB_USERNAME)) // Exclude profile repo
      
      const projectsData: Project[] = await Promise.all(
        filteredRepos.map(async (repo) => {
          const enhancedTechStack = await getEnhancedTechStack(repo.name, repo.language, repo.topics)
          
          return {
            id: repo.id,
            title: formatRepoName(repo.name),
            description: repo.description || 'No description available',
            image: generateProjectImage(repo.name, repo.language),
            techStack: enhancedTechStack,
            repoUrl: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            lastUpdated: formatDate(repo.updated_at)
          }
        })
      )

      setProjects(projectsData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const formatRepoName = (name: string): string => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const generateProjectImage = (repoName: string, language: string | null): string => {
    const colors = {
      'JavaScript': '#f7df1e',
      'TypeScript': '#3078c6',
      'Python': '#3776ab',
      'Java': '#ed8b00',
      'React': '#61dafb',
      'Vue': '#4fc08d',
      'Go': '#00add8',
      'Rust': '#ce422b',
      'C++': '#00599c',
      'C': '#a8b9cc',
      'HTML': '#e34f26',
      'CSS': '#1572b6',
      'Shell': '#89e051'
    }
    
    const color = colors[language as keyof typeof colors] || '#6c757d'
    
    // Create SVG data URL
    const svg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:${color};stop-opacity:0.6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" font-weight="bold" 
              text-anchor="middle" dominant-baseline="middle" fill="white">
          ${repoName}
        </text>
        <circle cx="250" cy="50" r="8" fill="white" opacity="0.3"/>
        <circle cx="270" cy="30" r="6" fill="white" opacity="0.2"/>
        <circle cx="230" cy="40" r="4" fill="white" opacity="0.4"/>
      </svg>
    `
    
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  const fetchRepoLanguages = async (repoName: string): Promise<string[]> => {
    try {
      const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`)
      if (!response.ok) {
        return []
      }
      const languages = await response.json()
      return Object.keys(languages)
    } catch {
      return []
    }
  }

  const getEnhancedTechStack = async (repoName: string, primaryLanguage: string | null, topics: string[]): Promise<string[]> => {
    const stack: string[] = []
    
    // Fetch all languages from GitHub API
    const allLanguages = await fetchRepoLanguages(repoName)
    
    // Add all detected languages
    allLanguages.forEach(lang => {
      if (!stack.includes(lang)) {
        stack.push(lang)
      }
    })
    
    // If no languages detected via API, fall back to primary language
    if (stack.length === 0 && primaryLanguage) {
      stack.push(primaryLanguage)
    }
    
    // Add topics as tech stack items
    topics.forEach(topic => {
      const formattedTopic = topic.charAt(0).toUpperCase() + topic.slice(1)
      if (!stack.includes(formattedTopic) && !stack.includes(topic)) {
        stack.push(formattedTopic)
      }
    })
    
    // Limit to 6 items to show more tech stack
    return stack.slice(0, 6)
  }


  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  if (loading) {
    return (
      <div className="projects-page">
        <div className="projects-header">
          <h1>Vedant's Projects</h1>
          <p>Loading projects from GitHub...</p>
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="projects-page">
        <div className="projects-header">
          <h1>Vedant's Projects</h1>
          <p>Error loading projects: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Vedant's Projects</h1>
        <p>A collection of my projects.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <a key={project.id} href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-stats">
                <span className="stat">
                  <span className="material-icons">star</span>
                  {project.stars}
                </span>
                <span className="stat">
                  <span className="material-icons">fork_right</span>
                  {project.forks}
                </span>
                <span className="stat-date">Updated {project.lastUpdated}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects