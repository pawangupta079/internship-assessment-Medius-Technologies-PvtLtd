import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Better.com Replica</title>
        <meta name="description" content="A replica of Better.com homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

        {/* <h1 className={styles.title}>Mortgages made simple</h1> */}
        <div className="relative w-full h-[400px] bg-green-600 flex items-center justify-center text-center">
  <h1 className="text-white text-4xl font-bold drop-shadow-lg">
    Mortgages made simple
  </h1>
</div>

        <button className={styles.button}>Start my approval</button>
        <p className={styles.info}>3 min | No credit impact</p>
        
        <section className={styles.reviews}>
          <h2>Better Mortgage</h2>
          <p>4.6 Stars | 3177 Google reviews</p>
          <a href="#">Find out why we’re better.</a>
          <a href="#">See all our stories</a>
          <p>Excellent | 4.4 out of 5</p>
        </section>
        
        <section className={styles.products}>
          <h2>Our products</h2>
          <ul>
            <li>One Day Mortgage™ - Get a Commitment Letter in a single day.</li>
            <li>Better HELOC - Access up to 90% of your home equity in 7 days.</li>
            <li>Insurance - Bundle and save on home, auto, and life insurance.</li>
            <li>Home Inspection - Free repair estimates, fast reports, and guarantees.</li>
            <li>Title Insurance - Transparent rates in one place.</li>
          </ul>
        </section>
        
        <section className={styles.resources}>
          <h2>Resources</h2>
          <ul>
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
          </ul>
        </section>
        
        <section className={styles.company}>
          <h2>Company</h2>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Investor Relations</li>
          </ul>
        </section>
        
        <section className={styles.contact}>
          <h2>Contact Us</h2>
          <p>Email: hello@better.com</p>
          <p>Phone: 415-523-8837</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}