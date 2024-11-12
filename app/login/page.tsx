// app/login/page.tsx

'use client'; // Adicione esta linha no início do arquivo

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de validação de login
    if (email === 'admin@veterinaria.com' && password === 'password123') {
      alert('Login bem-sucedido!');
      // Redirecionar para a página principal ou dashboard
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className='divGeral'>
      <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu email"
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Digite sua senha"
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
  );
}
