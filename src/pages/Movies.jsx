import { findFilms } from "services/app";
import { useEffect, useState } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";
import MovieBar from "components/MovieBar";

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
        <ul>
            {movies.map(({id, title}) => (
                <li key={id}>
                    <Link
                        to={`${id}`}
                        state={{home: location}}
                        >{title}</Link>
                </li>
            ))}
        </ul>
    </>)
};

export default Movies;