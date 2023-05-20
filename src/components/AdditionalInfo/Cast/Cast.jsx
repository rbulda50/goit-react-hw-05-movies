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
            }
        }
        getCast();
    }, [movieId])

    if (!cast) {
            return null;
    };
    
    return (
        <ul>
            {cast.cast.map(({ id, profile_path, name, character }) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    )
};

export default Cast;