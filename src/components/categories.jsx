import {categories} from '../utils'
export default function Categories() { 
    return (
        <section className="movie-section">
            <h2 className="section-title">Categories</h2>
            <div className="category-list">
                {categories.map((cat) => (
                    <button key={cat} className="category-button">
                        {cat}
                    </button>
                ))}
            </div>
        </section>
    )
}