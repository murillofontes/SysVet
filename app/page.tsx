'use client';
import styles from "./page.module.css"
import Layout from './fixLayout';
import { FC } from 'react';
import Head from 'next/head';
import FloatingButton from './FloatingButton';

import './Header.css';


const Home: FC = () => {
  return (
    <Layout>
      
       <div className="header-container">
        <div className="logo">
        </div>
        <div className={styles.container}>
          <Head>
            <title>SYSVET</title>
            <meta name="description" content="Sysvet" />
          </Head>
          <main className={styles.main}>
            <h2> SYSVET </h2>
            <h4 className={styles.description}>
              Cuidados com seu pet em primeiro lugar!
            </h4>

            <div className={styles.grid}>
              <a href="/exames" className={styles.card}>
                <h3>Cadastre seu Pet &rarr;</h3>
                <p>Agende exames, consultas e vacinas com nossos veterinários especialistas.</p>
              </a>

              <a href="/dashboard" className={styles.card}>
                <h3>Acompanhamento &rarr;</h3>
                <p>Entenda de forma completa a rotina de seus pets.</p>
              </a>

              <a href="/listaDog" className={styles.card}>
                <h3>Informações de animais &rarr;</h3>
                <p>teste</p>
              </a>
            </div>
            <FloatingButton><div></div></FloatingButton>
          </main>

          <footer className={styles.footer}>
            <a
              href="https://veterinariaamigavel.com"
              target="_blank"
              rel="copy"
            >
              SYSVET- Sistema veterinário integrado &copy; {new Date().getFullYear()}
            </a>
          </footer>
        </div>
      </div>
      
    </Layout>

  );
}

export default Home;
