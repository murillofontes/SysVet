
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica para login (ex.: redirecionar para página de login ou abrir modal)
    setIsLoggedIn(!isLoggedIn);
  };

  const showNotifications = () => {
    // Lógica para mostrar as notificações (ex.: abrir um modal ou dropdown)
    alert('Você tem 3 novas notificações!');
  };

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/about">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>

        <div className="actions">
          <button onClick={showNotifications} className="notification-btn">
            Notificações
          </button>
          <button onClick={handleLogin} className="login-btn">
            {isLoggedIn ? 'Sair' : 'Entrar'}
          </button>
        </div>
      </header>

      <main className="content">
        {children}
      </main>

      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .header {
          background-color: #00a0bd;
          color: #fff;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav ul {
          list-style: none;
          display: flex;
          gap: 15px;
        }
        .nav a {
          color: #fff;
          text-decoration: none;
        }
        .actions {
          display: flex;
          gap: 15px;
        }
        .notification-btn, .login-btn {
          background-color: #fff;
          color: black;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 5px;
        }
        .content {
          flex: 1;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
