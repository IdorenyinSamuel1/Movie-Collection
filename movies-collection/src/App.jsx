import './App.css';
import Header from './components/header';
import FeaturedMovies from './components/featuredMovies';
import PopularMovies from './components/popularMovies';
import Categories from './components/categories';

import AllMovies from './components/AllMovies';

function App() {
  return (
    <>
      <Header />
      <main className="dashboard-content">
        <FeaturedMovies />
        <PopularMovies />
        <Categories />
        <AllMovies />
      </main>
    </>
  );
}

export default App;

