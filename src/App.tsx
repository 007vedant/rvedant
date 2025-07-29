import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <header className="top-nav">
          <button className="theme-toggle" onClick={toggleTheme}>
            <span className="material-icons">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <nav className="navigation">
            <NavLink to="/" className="nav-item">
              <span className="material-icons nav-icon">home</span>
              Home
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
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<div className="page-placeholder"><h1>Blogs</h1><p>Coming soon...</p></div>} />
            <Route path="/about" element={<div className="page-placeholder"><h1>About</h1><p>Coming soon...</p></div>} />
            <Route path="/bookshelf" element={<div className="page-placeholder"><h1>Bookshelf</h1><p>Coming soon...</p></div>} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>Vibe coded with <span className="material-icons heart">favorite</span> by <a href="https://github.com/007vedant" target="_blank" rel="noopener noreferrer" className="footer-link">Vedant</a> © 2025</p>
        </footer>
      </div>
    </Router>
  )
}

export default App