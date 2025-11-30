"use client";
import { useState } from "react";

export default function MentorPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Sou seu MENTOR BILLIONMIND. O que quer criar hoje?" }
  ]);

  const [input, setInput] = useState("");
  const [provider, setProvider] = useState("openai");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setLoading(true);

    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `
Você é o MENTOR BILLIONMIND — um orientador de alta performance.
Responda no estilo:

• LUXO DOURADO
• Rápido
• Direto
• Estratégico
• Visão de lucro
• Mentalidade milionária

Pergunta do usuário: ${input}
`,
        provider,
      }),
    });

    const { result } = await response.json();

    setMessages([...newMessages, { role: "assistant", content: result }]);
    setInput("");
    setLoading(false);
  }

  return (
    <div style={{ padding: "20px", height: "100vh", display: "flex", flexDirection: "column" }}>
      <h1 style={{ color: "#ffd700", marginBottom: "20px" }}>AI Mentor</h1>

      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "14px",
          width: "100%",
        }}
      >
        <option value="openai">OpenAI GPT</option>
        <option value="grok">Grok XAI</option>
        <option value="gemini">Google Gemini</option>
      </select>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          background: "#111",
          borderRadius: "12px",
          padding: "14px",
          border: "1px solid #333",
          marginBottom: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              background: m.role === "user" ? "#ffd700" : "#222",
              color: m.role === "user" ? "#000" : "#fff",
              padding: "10px 14px",
              borderRadius: "12px",
              maxWidth: "80%",
              whiteSpace: "pre-wrap",
            }}
          >
            {m.content}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunte algo ao Mentor…"
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            background: "#111",
            color: "#fff",
            border: "1px solid #444",
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            background: "#ffd700",
            color: "#000",
            padding: "12px 18px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          {loading ? "..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
