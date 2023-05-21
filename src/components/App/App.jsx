import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../MovieDetails';
import Cast from 'components/AdditionalInfo/Cast';
import Reviews from 'components/AdditionalInfo/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </nav>
    </div>
  );
};
