import { useState, useEffect } from 'react'

interface Book {
  id: number
  title: string
  author: string
  category: string
  status: 'read' | 'currently-reading' | 'want-to-read'
  rating?: number
  review?: string
  coverColor: string
  readDate?: string
  pages?: number
  genre?: string
}

function Bookshelf() {
  const [books, setBooks] = useState<Book[]>([])
  const [filter, setFilter] = useState<'all' | 'read' | 'currently-reading' | 'want-to-read'>('all')
  const [genreFilter, setGenreFilter] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  const booksData: Book[] = [
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
      status: "currently-reading",
      rating: 4,
      review: "Long term book which requires lookback every now and then. Changed how I think about writing maintainable code.",
      coverColor: "#2563eb",
      pages: 464,
      genre: "engineering"
    },
    {
      id: 2,
      title: "System Design Interview",
      author: "Alex Xu",
      category: "Programming",
      status: "read",
      rating: 3,
      review: "Case studies for design of famous systems were really helpful. Goog for interview preparation.",
      coverColor: "#dc2626",
      readDate: "2025-01-20",
      pages: 280,
      genre: "engineering"
    },
    {
      id: 3,
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      category: "Programming",
      status: "want-to-read",
      coverColor: "#059669",
      genre: "engineering"
    },
    {
      id: 4,
      title: "Think and Grow Rich",
      author: "Napolean Hill",
      category: "Self-Help",
      status: "read",
      rating: 3,
      review: "The approach and methodology suggested are great. Haven't been able to apply a single learning IRL.",
      coverColor: "#7c3aed",
      readDate: "2022-06-10",
      pages: 238,
      genre: "self-help"
    },
    {
      id: 5,
      title: "Star Wars",
      author: "Various Authors",
      category: "Science Fiction",
      status: "read",
      rating: 5,
      review: "Being a Star Wars fanboy, have read and enjoyed most books in the franchise. May the Force be with You.",
      coverColor: "#0891b2",
      genre: "sci-fi"
    },
    {
      id: 6,
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "Engineering",
      status: "currently-reading",
      rating: 5,
      review: "One of the best books out there to understand software engineering principles in depth. A classic forever lookback book.",
      coverColor: "#166534",
      pages: 616,
      genre: "engineering"
    },
    {
      id: 7,
      title: "Algorithms to Live By",
      author: "Brian Christian, Tom Griffiths",
      category: "Engineering",
      status: "read",
      rating: 4.5,
      review: "Loved the perspective and idea present in the book on how core computer science concepts are so applicable in daily life.",
      coverColor: "#166534",
      readDate: "2024-12-20",
      pages: 368,
      genre: "engineering"
    },
    {
      id: 8,
      title: "Notes from Underground",
      author: "Fyodor Dostoevsky",
      category: "Philosophy",
      status: "read",
      rating: 4.5,
      review: "Loved how the book explores human mind, emotions and behaviour to the absolute depth. Enjoyed the dark theme.",
      coverColor: "#166534",
      readDate: "2025-02-25",
      pages: 136,
      genre: "philosophy"
    },
    {
      id: 9,
      title: "Harry Potter",
      author: "JK Rowling",
      category: "Fiction",
      status: "read",
      rating: 5,
      review: "Without this series, I would never have gotten into books. Essential part of my childhood and making me Potterhead.",
      coverColor: "#166534",
      genre: "fiction"
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      category: "Philosophy",
      status: "want-to-read",
      coverColor: "#166534",
      genre: "philosophy"
    }
  ]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Sort books by read date - most recent first, books without dates at the end
      const sortedBooks = [...booksData].sort((a, b) => {
        // If both have read dates, sort by date (newest first)
        if (a.readDate && b.readDate) {
          return new Date(b.readDate).getTime() - new Date(a.readDate).getTime()
        }
        // If only a has read date, a comes first
        if (a.readDate && !b.readDate) {
          return -1
        }
        // If only b has read date, b comes first
        if (!a.readDate && b.readDate) {
          return 1
        }
        // If neither has read date, maintain original order
        return 0
      })
      
      setBooks(sortedBooks)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const filteredBooks = books.filter(book => {
    const statusMatch = filter === 'all' || book.status === filter
    const genreMatch = genreFilter === 'all' || book.genre === genreFilter
    return statusMatch && genreMatch
  })

  const uniqueGenres = ['all', ...Array.from(new Set(books.map(book => book.genre).filter(Boolean)))]

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'read':
        return '#059669'
      case 'currently-reading':
        return '#dc2626'
      case 'want-to-read':
        return '#7c3aed'
      default:
        return '#6b7280'
    }
  }

  const getGenreColor = (genre?: string) => {
    switch (genre) {
      case 'engineering':
        return '#3b82f6'
      case 'philosophy':
        return '#8b5cf6'
      case 'fiction':
        return '#ef4444'
      case 'sci-fi':
        return '#06b6d4'
      case 'self-help':
        return '#10b981'
      default:
        return '#6b7280'
    }
  }

  const generateBookImage = (bookTitle: string, genre?: string): string => {
    const color = getGenreColor(genre)
    const cleanTitle = bookTitle.replace(/[<>&"']/g, '')
    const gradId = `grad${Math.random().toString(36).substr(2, 9)}`
    
    // Calculate responsive font size and text wrapping
    let fontSize = 20
    let lines: string[] = []
    
    if (cleanTitle.length > 25) {
      fontSize = 16
      // Split long titles into multiple lines
      const words = cleanTitle.split(' ')
      let currentLine = ''
      
      for (const word of words) {
        if ((currentLine + word).length > 20 && currentLine !== '') {
          lines.push(currentLine.trim())
          currentLine = word + ' '
        } else {
          currentLine += word + ' '
        }
      }
      if (currentLine.trim()) {
        lines.push(currentLine.trim())
      }
      // Limit to 2 lines
      if (lines.length > 2) {
        lines = lines.slice(0, 2)
        lines[1] = lines[1].substring(0, 17) + '...'
      }
    } else {
      lines = [cleanTitle]
    }
    
    // Generate text elements for each line
    const textElements = lines.map((line, index) => {
      const yPos = lines.length === 1 ? 50 : 45 + (index * 15)
      return `<text x="50%" y="${yPos}%" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white">${line}</text>`
    }).join('')
    
    // Create SVG data URL
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${color};stop-opacity:0.8" /><stop offset="100%" style="stop-color:${color};stop-opacity:0.6" /></linearGradient></defs><rect width="100%" height="100%" fill="url(#${gradId})"/>${textElements}<circle cx="250" cy="50" r="8" fill="white" opacity="0.3"/><circle cx="270" cy="30" r="6" fill="white" opacity="0.2"/><circle cx="230" cy="40" r="4" fill="white" opacity="0.4"/></svg>`
    
    try {
      return `data:image/svg+xml;base64,${btoa(svg)}`
    } catch (error) {
      // Fallback to simple colored rectangle if SVG generation fails
      return `data:image/svg+xml;base64,${btoa(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${color}"/></svg>`)}`
    }
  }

  const renderStars = (rating?: number) => {
    if (!rating) return null
    
    return (
      <div className="book-rating">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className="material-icons star"
            style={{ color: i < rating ? '#fbbf24' : '#d1d5db' }}
          >
            star
          </span>
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="bookshelf-page">
      <div className="bookshelf-header">
        <h1>Vedant's Bookshelf</h1>
        <p>Books that have shaped my thinking and knowledge.</p>
      </div>

      <div className="bookshelf-filters">
        <div className="status-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Books ({books.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'read' ? 'active' : ''}`}
            onClick={() => setFilter('read')}
          >
            Read ({books.filter(b => b.status === 'read').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'currently-reading' ? 'active' : ''}`}
            onClick={() => setFilter('currently-reading')}
          >
            Reading ({books.filter(b => b.status === 'currently-reading').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'want-to-read' ? 'active' : ''}`}
            onClick={() => setFilter('want-to-read')}
          >
            Want to Read ({books.filter(b => b.status === 'want-to-read').length})
          </button>
        </div>

        <div className="genre-dropdown">
          <select 
            value={genreFilter} 
            onChange={(e) => setGenreFilter(e.target.value)}
            className="genre-select"
          >
            <option value="all">All Genres</option>
            {uniqueGenres
              .filter(genre => genre !== 'all')
              .map(genre => (
                <option key={genre} value={genre}>
                  {genre.charAt(0).toUpperCase() + genre.slice(1).replace('-', ' ')} 
                  ({books.filter(b => b.genre === genre).length})
                </option>
              ))
            }
          </select>
        </div>
      </div>

      <div className="books-grid">
        {filteredBooks.map(book => (
          <a 
            key={book.id} 
            href={`https://www.goodreads.com/search?q=${encodeURIComponent(book.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="book-card"
          >
            <div className="book-image">
              <img src={generateBookImage(book.title, book.genre)} alt={book.title} />
            </div>
            
            <div className="book-content">
              <div className="book-header">
                <h3 className="book-title">{book.title}</h3>
                <div className="book-status-badge" style={{ backgroundColor: getStatusBadgeColor(book.status) }}>
                  {book.status.replace('-', ' ')}
                </div>
              </div>
              
              <p className="book-author">by {book.author}</p>
              
              <div className="book-meta">
                <span className="book-category">{book.category}</span>
                {book.pages && <span className="book-pages">{book.pages} pages</span>}
              </div>

              {renderStars(book.rating)}
              
              {book.review && (
                <p className="book-review">"{book.review}"</p>
              )}
              
              {book.readDate && (
                <p className="book-read-date">
                  <span className="material-icons">calendar_today</span>
                  Read on {new Date(book.readDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="no-books">
          <span className="material-icons">menu_book</span>
          <p>No books found for the selected filter.</p>
        </div>
      )}
    </div>
  )
}

export default Bookshelf