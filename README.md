# Better.com Replica

This project is a multi-page web application built using React and Next.js, designed to replicate the design and basic functionality of the Better.com website. The application includes the following pages:

1. **Home**: The main landing page that showcases the services offered.
2. **About Us**: A page that provides information about the company and its mission.
3. **Mortgage Calculator**: An interactive calculator that helps users estimate their mortgage payments.
4. **Start Page**: A page that guides users on how to begin their mortgage application process.

## Project Structure

The project is organized as follows:

```
better-com-replica
├── pages
│   ├── _app.js               # Initializes pages and global styles
│   ├── index.js              # Home page
│   ├── about-us.js           # About Us page
│   ├── mortgage-calculator.js # Mortgage Calculator page
│   └── start.js              # Start page
├── components
│   ├── Header.js             # Navigation and branding component
│   ├── Footer.js             # Footer component with copyright info
│   └── MortgageCalculatorForm.js # Interactive mortgage calculator component
├── styles
│   ├── globals.css           # Global styles for the application
│   ├── Home.module.css       # Styles specific to the Home page
│   ├── AboutUs.module.css    # Styles specific to the About Us page
│   ├── MortgageCalculator.module.css # Styles specific to the Mortgage Calculator page
│   └── Start.module.css      # Styles specific to the Start page
├── public
│   └── favicon.ico           # Favicon for the application
├── package.json              # npm configuration file
├── next.config.js            # Next.js configuration settings
└── README.md                 # Project documentation
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd better-com-replica
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Deployment

The application can be deployed on platforms like Vercel, Netlify, or Heroku. Follow the respective platform's documentation for deployment instructions.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.