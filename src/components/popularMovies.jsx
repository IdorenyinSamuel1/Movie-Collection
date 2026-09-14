import {popular} from '../utils'
export default function PopularMovies() {
  return (
    <section className="popular-movies">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {popular.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year} • {movie.genre}</p>
            <p>Rating:<span className="star-icon">⭐</span> {movie.rating}/5</p>
          </div>
        ))}
      </div>
    </section>
  )
}