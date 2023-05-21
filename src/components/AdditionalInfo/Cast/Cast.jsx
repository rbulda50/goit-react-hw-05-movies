import css from './Cast.module.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastById } from "services/app";

const Cast = () => {
    const [cast, setCast] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        async function getCast() {
            try {
                const cast = await getMovieCastById(movieId);
                setCast(cast);
            } catch (error) {
                console.log('Error!')
            };
        };
        getCast();
    }, [movieId]);

    if (!cast) {
            return null;
    };

    return (
        <ul className={css.CastList}>
            {cast.cast.map(({ id, profile_path, name, character }) => (
                <li
                    className={css.ListItem}
                    key={id}>
                    <img
                        className={css.Image}
                        width={150}
                        height={200}
                        src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : `https://via.placeholder.com/150x200`}
                        alt={name} />
                    <p className={css.Name}>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    );
};

export default Cast;