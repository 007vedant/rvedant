import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Experience from './components/Experience'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <aside className="sidebar">
        <div className="profile-section">
          <div className="avatar">
            <img src="https://via.placeholder.com/50" alt="Vedant" />
          </div>
          <div className="profile-info">
            <h2>Vedant</h2>
            <p className="typewriter">Software Engineer</p>
          </div>
        </div>
        
        <nav className="navigation">
          <NavLink to="/" className="nav-item">
            <span className="material-icons nav-icon">home</span>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item">
            <span className="material-icons nav-icon">person</span>
            About
          </NavLink>
          <NavLink to="/experience" className="nav-item">
            <span className="material-icons nav-icon">work</span>
            Experience
          </NavLink>
          <NavLink to="/projects" className="nav-item">
            <span className="material-icons nav-icon">folder</span>
            Projects
          </NavLink>
          <NavLink to="/blogs" className="nav-item">
            <span className="material-icons nav-icon">article</span>
            Blogs
          </NavLink>
          <NavLink to="/bookshelf" className="nav-item">
            <span className="material-icons nav-icon">library_books</span>
            Bookshelf
          </NavLink>
        </nav>
        
        <div className="social-links">
          <h3>Connect</h3>
          <a href="#" className="social-link">
            <span className="material-icons social-icon">alternate_email</span>
            Twitter
          </a>
          <a href="#" className="social-link">
            <span className="material-icons social-icon">business</span>
            LinkedIn
          </a>
          <a href="#" className="social-link">
            <span className="material-icons social-icon">code</span>
            Github
          </a>
          <a href="#" className="social-link">
            <span className="material-icons social-icon">photo_camera</span>
            Instagram
          </a>
        </div>
      </aside>
      
      <main className="main-content">
        <button className="theme-toggle" onClick={toggleTheme}>
          <span className="material-icons">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<div className="page-placeholder"><h1>Projects</h1><p>Coming soon...</p></div>} />
          <Route path="/blogs" element={<div className="page-placeholder"><h1>Blogs</h1><p>Coming soon...</p></div>} />
          <Route path="/about" element={<div className="page-placeholder"><h1>About</h1><p>Coming soon...</p></div>} />
          <Route path="/bookshelf" element={<div className="page-placeholder"><h1>Bookshelf</h1><p>Coming soon...</p></div>} />
        </Routes>
      </main>
      </div>
    </Router>
  )
}

export default App