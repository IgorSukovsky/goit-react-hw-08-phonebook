import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNavigation.module.css';

export default function AuthNavigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        exact
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        exact
        to="/login"
      >
        Log in
      </NavLink>
    </nav>
  );
}
