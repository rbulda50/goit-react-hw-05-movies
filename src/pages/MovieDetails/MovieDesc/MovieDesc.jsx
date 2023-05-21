import PropTypes from 'prop-types';
import css from './MovieDesc.module.css';
import iconForItem from '../../../icons/film-solid.svg'
import IconForTitle from '../../../icons/IconForTitle.png'

const MovieDesc = ({ genresNames, movie }) => {
    return (<div className={css.MovieContainer}>
        <div className={css.MovieImgCont}>
            <img
            className={css.MovieImg}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title} />
        </div>
        <div className={css.MovieDesc}>
            <h2 className={css.MovieDescTitle}>
                <img
                    className={css.Icon}
                    width={30}
                    src={IconForTitle}
                    alt="Icon for item" />
                {movie.title}</h2>
            <p className={css.Scode}>User scode: {movie.vote_average}</p>
            <h2 className={css.MovieDescSubtitle}>
                <img
                    className={css.Icon}
                    width={15}
                    src={iconForItem}
                    alt="Icon for item" />Overview</h2>
            <p className={css.DescInf}>{movie.overview}</p>
            <h2 className={css.MovieDescSubtitle}>
                <img
                    className={css.Icon}
                    width={15}
                    src={iconForItem}
                    alt="Icon for item" />Genres</h2>
            <p className={css.DescInf}>{genresNames}</p>
        </div>
    </div>
    );
};

export default MovieDesc;

MovieDesc.propTypes = {
    movie: PropTypes.object.isRequired,
    genresNames: PropTypes.string.isRequired,
};
