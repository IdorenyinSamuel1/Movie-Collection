import { movies } from '../utils';
export default function FeaturedMovies() {
  return (
    <section className="featured-movies">
      <h2>Featured Movies</h2>
      <div className="movie-list">
        {movies.featured.map(movie => (
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