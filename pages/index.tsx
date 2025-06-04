import Head from 'next/head';
import type { CSSProperties } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Summit Financial Consulting</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header style={styles.header as CSSProperties}>
        <h1 style={styles.logo as CSSProperties}>TRIVENDEUX AND CO.</h1>
        <nav>
          <a href="#" style={styles.navLink as CSSProperties}>Home</a>
          <a href="/about" style={styles.navLink as CSSProperties}>About</a>
          <a href="#services" style={styles.navLink as CSSProperties}>Services</a>
          <a href="#contact" style={styles.navLink as CSSProperties}>Contact</a>
        </nav>
      </header>

      <section className="hero" style={styles.hero as CSSProperties}>
        <h2>Financial Consulting</h2>
        <p>We provide expert financial advice to help you achieve your business goals.</p>
        <button onClick={() => window.location.href = '#contact'}>Get Started</button>
      </section>

      <section id="services" className="services" style={styles.services as CSSProperties}>
        <h3>Our Services</h3>
        <div style={styles.serviceGrid as CSSProperties}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceBox as CSSProperties}>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" style={styles.cta as CSSProperties} id="contact">
        <h4>Ready to reach new heights?</h4>
        <p>Contact us today to schedule a consultation.</p>
        <button>Contact Us</button>
      </section>

      <footer style={styles.footer as CSSProperties}>
        &copy; 2025 Summit Financial Consulting. All rights reserved. | Email: contact@summitfc.com | Phone: (123) 456-7890
      </footer>
    </>
  );
}

const services = [
  {
    title: 'Financial Planning',
    desc: 'Develop a clear roadmap for your financial future with tailored plans that align with your personal and business goals.'
  },
  {
    title: 'Investment Management',
    desc: 'Make informed investment decisions with our data-driven strategies and portfolio management expertise.'
  },
  {
    title: 'Risk Management',
    desc: 'Identify and mitigate financial risks to protect your business from market volatility and unexpected disruptions.'
  },
  {
    title: 'Tax Planning',
    desc: 'Optimize your tax strategy and ensure compliance while minimizing liabilities and maximizing returns.'
  }
];

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 10%',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '1.5em',
    color: '#003366'
  },
  navLink: {
    marginLeft: 20,
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500
  },
  hero: {
    textAlign: 'center',
    padding: '80px 20px',
    background: '#f8f9fa'
  },
  services: {
    padding: '60px 10%',
    textAlign: 'center',
    background: '#fff'
  },
  serviceGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px'
  },
  serviceBox: {
    width: 220,
    padding: 20,
    background: '#f0f4f8',
    borderRadius: 8
  },
  cta: {
    background: '#003366',
    color: 'white',
    textAlign: 'center',
    padding: '50px 20px'
  },
  footer: {
    background: '#f8f9fa',
    textAlign: 'center',
    padding: 20,
    fontSize: '0.9em'
  }
};
