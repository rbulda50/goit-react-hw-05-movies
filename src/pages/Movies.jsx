import { findFilms } from "services/app";
import { useEffect, useState } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";
import MovieBar from "components/MovieBar";
import css from './Movies.module.css';

const Movies = () => {
    const [value, setValue] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('value') ?? '';

    const onFormSubmit = (value) => {
        setValue(value);
        setSearchParams(value !== '' ? {value} : {});
    };

    useEffect(() => {
        if (!value && !filter) {
            return;
        }

        async function getFilms() {
            try {
                const listOfFilms = await findFilms(filter ? filter : value);
                setMovies(listOfFilms)
            } catch (error) {
                console.log('Error!')
            }
        }
        getFilms();
    }, [value, filter])


    return (<>
        <MovieBar onFormSubmit={onFormSubmit} />
        <ul className={css.List}>
            {movies.map(({id, title}) => (
                <li
                    className={css.Item}
                    key={id}>
                    <Link
                        className={css.Link}
                        to={`${id}`}
                        state={{home: location}}
                        >{title}</Link>
                </li>
            ))}
        </ul>
    </>)
};

export default Movies;