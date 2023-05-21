import { useEffect, useState, useRef, Suspense } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "services/app";
import AdditionalInfo from "components/AdditionalInfo";
import MovieDesc from "./MovieDesc";
import css from './MovieDetails.module.css';
import IconArrowBack from '../../icons/arrow-back.png';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const currentLocation = useRef(location);

    useEffect(() => {
        async function getMovieDetails() {
            try {
                const movie = await getMovieById(movieId);
                setMovie(movie);
            } catch (error) {
                console.log('Error!')
            }
        }
        getMovieDetails();
    }, [movieId]);

    if (!movie) {
        return null;
    };

    const genresNames = movie.genres.map((movie) => movie.name).join(' ');
    
    return (
        <div className={css.DetailsContainer}>
            <div className={css.BackBtn}>
                <img
                    width={50}
                    src={IconArrowBack}
                    alt="Arrow back" />
                <Link
                    className={css.Link}
                    to={currentLocation.current.state?.home ?? '/'}>Back</Link>
            </div>
            <MovieDesc
                movie={movie}
                genresNames={genresNames} />
            <div className={css.AdditionalInfo}>
                <AdditionalInfo />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
            </div>
        </div>
    );
};

export default MovieDetails;