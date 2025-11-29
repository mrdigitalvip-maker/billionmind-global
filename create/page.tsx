"use client";

import { useState } from "react";

export default function CreateProductPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!prompt.trim()) {
      alert("Digite o que você quer criar.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/create-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert("Erro: " + data.error);
        setLoading(false);
        return;
      }

      setResult(data.response);
    } catch (err) {
      alert("Falha ao conectar com o servidor.");
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 20, color: "#0f0" }}>
      <h1>CRIAR PRODUTO DIGITAL</h1>

      <textarea
        style={{
          width: "100%",
          height: 120,
          padding: 10,
          background: "#111",
          color: "#0f0",
          border: "1px solid #0f0",
          borderRadius: 8,
        }}
        placeholder="Descreva o produto digital que você quer criar..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        style={{
          marginTop: 15,
          padding: "10px 25px",
          background: "#0f0",
          color: "#000",
          border: "none",
          borderRadius: 8,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {loading ? "Gerando..." : "Criar com IA"}
      </button>

      {result && (
        <div
          style={{
            marginTop: 25,
            padding: 20,
            background: "#000",
            border: "1px solid #0f0",
            borderRadius: 8,
            whiteSpace: "pre-wrap",
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}
