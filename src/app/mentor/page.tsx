"use client";
import { useState } from "react";

export default function MentorPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState("openai"); // padrão

  async function handleSend() {
    if (!prompt.trim()) return;

    setLoading(true);
    setResult("");

    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, provider }),
    });

    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#ffd700", marginBottom: "20px" }}>AI Mentor</h1>

      {/* Escolher IA */}
      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <option value="openai">OpenAI GPT</option>
        <option value="grok">Grok XAI</option>
        <option value="gemini">Google Gemini</option>
      </select>

      {/* Caixa de texto */}
      <textarea
        placeholder="Digite sua pergunta para a IA..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          padding: "12px",
          borderRadius: "12px",
          background: "#111",
          color: "#fff",
          border: "1px solid #444",
          marginBottom: "20px",
        }}
      />

      {/* Botão */}
      <button
        onClick={handleSend}
        disabled={loading}
        style={{
          padding: "14px",
          width: "100%",
          borderRadius: "12px",
          background: "#ffd700",
          color: "#000",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        {loading ? "Gerando..." : "Enviar"}
      </button>

      {/* Resultado */}
      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "18px",
            background: "#222",
            borderRadius: "12px",
            border: "1px solid #555",
            whiteSpace: "pre-wrap",
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}
