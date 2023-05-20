import { findFilms } from "services/app";
import { useEffect, useState } from "react";
import { useLocation, setSearchParams, Link } from "react-router-dom";
import MovieBar from "components/MovieBar/MovieBar";

const Movies = () => {
    const [value, setValue] = useState('');
    const [movies, setMovies] = useState([]);

    const onFormSubmit = (value) => {
        setValue(value);
    }
        

    useEffect(() => {
        if (!value) {
            return;
        }
        async function getFilms() {
            try {
                const listOfFilms = await findFilms(value);
                setMovies(listOfFilms)
            } catch (error) {
                console.log('Error!')
            }
        }
        getFilms();
console.log(movies)

    }, [value])


    return (<>
        <MovieBar onFormSubmit={onFormSubmit} />
        <ul>
            {movies.map(({id, title}) => (
                <li key={id}>
                    <Link
                        to={`${id}`}
                        >{title}</Link>
                </li>
            ))}
        </ul>
    </>)
};

export default Movies;