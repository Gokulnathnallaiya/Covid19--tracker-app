import React from 'react';
import styles from './NavBar.module.css';
import logo from "../../img/covidd.png";

const navBar = () => {
    return (
        <header>
            <nav className={styles.container}>
                
                    <img className={styles.logo} src={logo} alt="logo" />
                    <h1 className={styles.navbar} >COVID TRACKER</h1>
                    <a className={styles.githublink} href="https://github.com/Gokulnathnallaiya/Covid19--tracker-app">Github Repo</a>

                
            </nav>
        </header>

    )
}
export default navBar;