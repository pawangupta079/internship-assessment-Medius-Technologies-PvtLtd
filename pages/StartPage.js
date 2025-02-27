import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaHome, FaRedo, FaDollarSign } from 'react-icons/fa';
import styles from '../styles/StartPage.module.css';

const StartPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {/* User Avatar */}
                <img 
                    src="image.png" 
                    alt="User Avatar" 
                    className={styles.avatar}
                />
                {/* Title */}
                <h1 className={styles.title}>Hi, I'm Betsy!</h1>
                <h2 className={styles.subtitle}>What can I help you with?</h2>
                {/* Options */}
                <div className={styles.options}>
                    <button className={styles.optionButton}>
                        <FaHome className={styles.icon} /> Buying a home
                    </button>
                    <button className={styles.optionButton}>
                        <FaRedo className={styles.icon} /> Refinance my mortgage
                    </button>
                    <button className={styles.optionButton}>
                        <FaDollarSign className={styles.icon} /> Get cash from my home
                    </button>
                </div>
                {/* Stats Section */}
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <h3 className={styles.statValue}>$100B</h3>
                        <p className={styles.statLabel}>Home loans funded entirely online</p>
                    </div>
                    <div className={styles.stat}>
                        <h3 className={styles.statValue}>400K</h3>
                        <p className={styles.statLabel}>Customers who chose a Better Mortgage</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default StartPage;

