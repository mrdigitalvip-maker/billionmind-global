"use client";
import { useState } from "react";

export default function StrategyPage() {
  const [niche, setNiche] = useState("");
  const [provider, setProvider] = useState("openai");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateStrategy() {
    if (!niche.trim()) return;

    setLoading(true);
    setResult("");

    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `
Crie uma estratégia de ganho altamente lucrativa para o nicho: ${niche}

Gere:

1. **Identidade da marca**
   - Nome forte
   - Tom de voz
   - Persona dominante (Alpha, Luxo, Nova Era etc)
   - Diferencial único

2. **Estratégia de conteúdo**
   - 10 ideias de posts virais
   - 10 Reels/TikTok virais
   - 5 chamadas para gravação de vídeo
   - 5 manchetes chamativas

3. **Plano de monetização**
   - Produto principal
   - Mini-ofertas
   - Upsell
   - Programa de assinatura mensal
   - Ideias de bônus

4. **Funil completo**
   - Atração
   - Aquecimento
   - Conversão
   - Escala
   - Copy completa do funil

5. **Automação**
   - Sequência de mensagens
   - Respostas prontas
   - Scripts de persuasão
   - Gatilhos mentais aplicados

6. **Resumo final estilo consultoria premium**

IMPORTANTE: Escreva tudo com estilo LUXO PREMIUM DOURADO, similar a grandes marcas de elite digital.
`,
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
        Criar Estratégia de Ganho
      </h1>

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

      <textarea
        placeholder="Digite seu nicho ou objetivo…"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
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

      <button
        onClick={generateStrategy}
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
        {loading ? "Gerando Estratégia..." : "Criar Estratégia de Ganho"}
      </button>

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
