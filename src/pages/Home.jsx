import { getTrendingMovies } from "services/app";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        async function getFilms() {
            try {
                const trending = await getTrendingMovies();
                setTrending(trending);
            } catch (error) {
                console.log('Error!')
            }
        }
        getFilms();
    }, []);

    return (
        <main>
            <h1>Trending movies</h1>
            <ul>
                    {trending.map(({ id, title }) => (
                        <li key={id}>
                            <NavLink to={`movies/${id}`}>{title}</NavLink>
                        </li>
                    ))}
            </ul>
        </main>
    )
};

export default Home;