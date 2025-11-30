"use client";

import { useState } from "react";

export default function MentorPage() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Olá! Sou seu Mentor IA. Como posso ajudar hoje?" }
  ]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    // adiciona mensagem do usuário
    setMessages(prev => [...prev, { from: "user", text: input }]);

    const userMessage = input;
    setInput("");

    // chamada ao backend (que iremos criar)
    const res = await fetch("/api/mentor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userMessage })
    });

    const data = await res.json();

    // adiciona resposta da IA
    setMessages(prev => [...prev, { from: "ai", text: data.reply || "Erro ao gerar resposta." }]);
  }

  return (
    <div style={{ padding: "20px", color: "white", fontFamily: "Inter" }}>
      <h1 style={{ fontSize: "30px", marginBottom: "12px", color: "gold" }}>
        Mentor IA — Suporte Premium
      </h1>

      <div
        style={{
          height: "65vh",
          overflowY: "auto",
          padding: "16px",
          background: "rgba(255,215,0,0.15)",
          border: "1px solid gold",
          borderRadius: "16px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.from === "user" ? "flex-end" : "flex-start",
              background: m.from === "user" ? "gold" : "rgba(255,255,255,0.1)",
              color: m.from === "user" ? "black" : "white",
              padding: "10px 14px",
              borderRadius: "16px",
              maxWidth: "80%"
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Digite sua pergunta…"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid gold",
            background: "black",
            color: "white"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "14px 20px",
            background: "gold",
            fontWeight: "bold",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            color: "black"
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
