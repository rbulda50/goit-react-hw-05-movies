import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { getMovieById } from "services/app";
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
         async function getMovieDetails() {
        try {
            const movie = await getMovieById(movieId);
            setMovie(movie);
        } catch (error) {
            console.log('Error!')
            }
        }
    getMovieDetails()
    }, [movieId])
    if (!movie) {
        return null;
    }


    const genresNames = movie.genres.map((movie) => movie.name).join(' ')

    return (
        <div>
            <Link>Back</Link>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>User scode: {movie.vote_average}</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <p>{genresNames}</p>
            </div>
            <AdditionalInfo />
            <Outlet />
        </div>
    )
};

export default MovieDetails;