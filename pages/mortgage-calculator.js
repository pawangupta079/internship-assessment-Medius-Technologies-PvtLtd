import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MortgageCalculatorForm from '../components/MortgageCalculatorForm';
import styles from '../styles/MortgageCalculator.module.css';

const MortgageCalculator = () => {
    const [result, setResult] = useState(null);

    const handleCalculation = (calculatedResult) => {
        setResult(calculatedResult);
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.title}>Mortgage Calculator</h1>
            <MortgageCalculatorForm onCalculate={handleCalculation} />
            {result && (
                <div className={styles.result}>
                    <h2>Your Estimated Monthly Payment:</h2>
                    <p>${result}</p>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default MortgageCalculator;