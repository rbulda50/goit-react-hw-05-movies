import { getTrendingMovies } from "services/app";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from './Home.module.css';
import headerLogo from '../icons/headerLogo.png';

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
        <main className={css.MainContainer}>
            
            <h1 className={css.MainHeader}>
                <img src={headerLogo} alt="header logo" width={50}/>
                Trending movies</h1>
            <ul className={css.MainList}>
                    {trending.map(({ id, title }) => (
                        <li
                            className={css.MainListItem}
                            key={id}>
                            <NavLink
                                className={css.MainListLink}
                                to={`movies/${id}`}>{title}</NavLink>
                        </li>
                    ))}
            </ul>
        </main>
    )
};

export default Home;