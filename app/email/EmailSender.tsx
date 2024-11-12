// frontend/src/EmailSender.tsx
import React, { useState, FormEvent } from 'react';

function EmailSender() {
  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, text }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Para"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Assunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Mensagem"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Enviar E-mail</button>
    </form>
  );
}

export default EmailSender;
