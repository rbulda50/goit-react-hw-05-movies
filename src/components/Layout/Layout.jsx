import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './Layout.module.css';

const Layout = () => {
    return <div className={css.Container}>
        <header className={css.Header}>
            <ul className={css.NavList}>
            <li className={css.NavItem}>
                <NavLink
                    className={css.NavLink}
                    to="/">Home</NavLink>
            </li>
            <li className={css.NavItem}>
                <NavLink
                    className={css.NavLink}
                    to="/movies">Movies</NavLink>
            </li>
        </ul>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </div>
};

export default Layout;