"use client";
import { useState } from "react";

export default function CreateProductPage() {
  const [idea, setIdea] = useState("");
  const [provider, setProvider] = useState("openai");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateProduct() {
    if (!idea.trim()) return;

    setLoading(true);
    setResult("");

    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `Crie um produto digital completo com base nesta ideia: ${idea}.
        Gere:
        - Nome premium irresistível
        - Descrição que vende
        - Público ideal
        - Tópicos principais
        - Bônus exclusivos
        - Copy de venda pronta
        - Estrutura do produto
        - Sugestão de preço
        - Garantia psicológica
        - CTA final`,
        provider,
      }),
    });

    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#ffd700", marginBottom: "20px" }}>
        Criar Produto Digital
      </h1>

      {/* Selecionar IA */}
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

      {/* Campo de ideia */}
      <textarea
        placeholder="Digite uma ideia de produto digital..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
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
        onClick={generateProduct}
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
        {loading ? "Gerando Produto..." : "Criar Produto"}
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
