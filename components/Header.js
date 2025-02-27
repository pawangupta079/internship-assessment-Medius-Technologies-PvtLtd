import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Good to see you here.</Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about-us">About Us</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/mortgage-calculator">Mortgage Calculator</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/StartPage">Start</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
