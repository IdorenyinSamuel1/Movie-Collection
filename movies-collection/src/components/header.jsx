export default function Header() {
  return (
    // Header 
    <header className="dashboard-header">
        <div className="brand-title">Movie Collection</div>
        <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search movies..."/>
        </div>
    </header>
  )
}