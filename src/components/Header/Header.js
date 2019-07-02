import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles.module.css';

const Header = () => (
    <header className={styles.header}>
        <ul className={styles.menu}>
            <li>
                <NavLink
                    exact
                    to="/"
                    className={styles.menuItem}
                    activeClassName={styles.activeMenuItem}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/pets"
                    className={styles.menuItem}
                    activeClassName={styles.activeMenuItem}
                >
                    Pets
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={styles.menuItem}
                    activeClassName={styles.activeMenuItem}
                >
                    About
                </NavLink>
            </li>
        </ul>
    </header>
);

export default Header;
