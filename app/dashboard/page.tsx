'use client';
import Layout from '../fixLayout';
import React from 'react';
import './Dashboard.css'; 
import FloatingButton from '../FloatingButton';

const Dashboard = () => {
  return (
    <Layout>
    <div className="dashboard-container">
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Acompanhamento</h1>
          <h4>Pets cadastrados:</h4>
        </header>

        <section className="dashboard-widgets">
          <div className="widget">
            <h3>teste</h3>
            <p>02</p>
          </div>
          <div className="widget">
            <h3>Consultas</h3>
            <p>05</p>
          </div>
          <div className="widget">
            <h3>Exames</h3>
            <p>03</p>
          </div>
          <div className="widget">
            <h3>Vacinas</h3>
            <p>06</p>
          </div>
        </section>
      </main>
    </div>
    <FloatingButton><div></div></FloatingButton>
  </Layout>
  );
};

export default Dashboard;