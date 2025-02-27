import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>About Us</h1>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.content}>
                        Better.com is a technology-driven mortgage company that aims to simplify the home financing process. 
                        Our mission is to make homeownership accessible and affordable for everyone.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Vision</h2>
                    <p className={styles.content}>
                        We believe in a world where everyone can achieve their dream of homeownership without the stress and complexity 
                        traditionally associated with mortgages.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Team</h2>
                    <p className={styles.content}>
                        Our team is composed of industry experts and technology enthusiasts who are dedicated to providing the best 
                        experience for our customers.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;