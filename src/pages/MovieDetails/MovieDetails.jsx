import { useEffect, useState, useRef, Suspense } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "services/app";
import AdditionalInfo from "components/AdditionalInfo";
import MovieDesc from "./MovieDesc";

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
        <>
            <Link to={currentLocation.current.state?.home ?? '/'}>Back</Link>
            <MovieDesc desc={{genresNames, movie}} />
            <div>
                <AdditionalInfo />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
            </div>
        </>
    );
};

export default MovieDetails;