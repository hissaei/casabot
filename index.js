import React from 'react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to CasaBot</h1>
      <p style={{ maxWidth: '600px', textAlign: 'center', color: '#ccc', marginBottom: '2rem' }}>
        Your AI-powered real estate assistant. Talk to CasaBot to find homes, get smart offer suggestions, and navigate the buying process — all by voice.
      </p>
      <button style={{ backgroundColor: '#22c55e', color: '#000', padding: '1rem 2rem', borderRadius: '1rem', fontWeight: 'bold', fontSize: '1rem' }}>
        🎤 Talk to CasaBot
      </button>
      <p style={{ marginTop: '3rem', fontSize: '0.875rem', color: '#888' }}>Los Angeles, CA • Powered by AI</p>
    </main>
  );
}
