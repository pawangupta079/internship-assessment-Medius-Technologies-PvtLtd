import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Better.com Replica. All rights reserved.</p>
                <div className={styles.links}>
                    <a href="/about-us">About Us</a>
                    <a href="/mortgage-calculator">Mortgage Calculator</a>
                    <a href="/StartPage">Get Started</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;