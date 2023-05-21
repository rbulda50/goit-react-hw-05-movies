const MovieDesc = ({desc: {genresNames, movie}}) => {
    return (<div>
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
    );
};

export default MovieDesc;