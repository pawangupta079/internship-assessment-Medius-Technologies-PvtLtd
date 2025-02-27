import React, { useState } from 'react';
import styles from '../styles/MortgageCalculator.module.css';

const MortgageCalculatorForm = () => {
    const [homePrice, setHomePrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [loanTerm, setLoanTerm] = useState(30);
    const [interestRate, setInterestRate] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateMortgage = (e) => {
        e.preventDefault();
        const principal = homePrice - downPayment;
        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        const monthlyPayment = (principal * monthlyInterestRate) / 
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        setMonthlyPayment(monthlyPayment.toFixed(2));
    };

    return (
        <div className={styles.calculatorContainer}>
            <h2>Mortgage Calculator</h2>
            <form onSubmit={calculateMortgage}>
                <div>
                    <label>Home Price:</label>
                    <input 
                        type="number" 
                        value={homePrice} 
                        onChange={(e) => setHomePrice(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Down Payment:</label>
                    <input 
                        type="number" 
                        value={downPayment} 
                        onChange={(e) => setDownPayment(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Loan Term (years):</label>
                    <select 
                        value={loanTerm} 
                        onChange={(e) => setLoanTerm(e.target.value)}
                    >
                        <option value={15}>15</option>
                        <option value={30}>30</option>
                    </select>
                </div>
                <div>
                    <label>Interest Rate (%):</label>
                    <input 
                        type="number" 
                        value={interestRate} 
                        onChange={(e) => setInterestRate(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {monthlyPayment && (
                <div className={styles.result}>
                    <h3>Monthly Payment: ${monthlyPayment}</h3>
                </div>
            )}
        </div>
    );
};

export default MortgageCalculatorForm;