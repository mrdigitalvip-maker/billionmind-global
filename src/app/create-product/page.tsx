"use client";
import { useState } from "react";

export default function CreateProductPage() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generateProduct() {
    if (!idea.trim()) return alert("Digite sua ideia primeiro.");

    setLoading(true);
    setResult("");

    try {
      const req = await fetch("/api/create-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      const res = await req.json();

      if (res.error) {
        setResult("Erro: " + res.error);
      } else {
        setResult(res.product);
      }
    } catch (err) {
      setResult("Erro ao conectar ao servidor.");
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        padding: "120px 20px 40px",
        minHeight: "100vh",
        background: "radial-gradient(circle at 50% 50%, #001a22 0%, #000 100%)",
        color: "#e0e0e0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "26px",
          marginBottom: "20px",
          fontWeight: "800",
          background: "linear-gradient(90deg,#FFD700,#B8860B)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Criar Produto Digital
      </h1>

      <div
        style={{
          background: "rgba(10,20,30,0.45)",
          padding: "22px",
          borderRadius: "18px",
          border: "1px solid rgba(255,215,0,0.3)",
          backdropFilter: "blur(14px)",
          marginBottom: "20px",
        }}
      >
        <label style={{ fontSize: "14px", opacity: 0.8 }}>
          Descreva sua ideia:
        </label>

        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Ex: Quero criar um eBook que ensina a ganhar dinheiro com IA..."
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "14px",
            height: "120px",
            background: "#0a0a0a",
            color: "white",
            borderRadius: "12px",
            border: "1px solid #333",
            outline: "none",
          }}
        />

        <button
          onClick={generateProduct}
          disabled={loading}
          style={{
            marginTop: "16px",
            width: "100%",
            padding: "16px",
            borderRadius: "40px",
            border: "2px solid #FFD700",
            background: loading ? "#333" : "transparent",
            color: "#FFD700",
            fontWeight: "800",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 0 18px rgba(255,215,0,0.4)",
          }}
        >
          {loading ? "Gerando..." : "Criar Produto com IA"}
        </button>
      </div>

      {result && (
        <div
          style={{
            marginTop: "20px",
            whiteSpace: "pre-wrap",
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "14px",
            border: "1px solid rgba(255,215,0,0.2)",
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}
