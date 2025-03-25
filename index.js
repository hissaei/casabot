import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to CasaBot</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-xl">
        Your AI-powered real estate assistant. Talk to CasaBot to find homes, get smart offer suggestions, and navigate the buying process — all by voice.
      </p>

      <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-2xl text-lg shadow-lg transition-all">
        🎤 Talk to CasaBot
      </button>

      <p className="text-sm text-gray-500 mt-10">Los Angeles, CA • Powered by AI</p>
    </main>
  );
}
