"use client";

import { useState } from "react";

export default function MentorPage() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/mentor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage.content }),
      });

      const data = await res.json();

      if (data.success) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Erro ao gerar resposta." },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Falha ao conectar com a IA. Verifique suas keys e tente novamente.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "80px",
        marginBottom: "100px",
        color: "#e0e0e0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "26px",
          fontWeight: 800,
          color: "#FFD700",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Mentor BillionMind AI
      </h1>

      <div
        style={{
          border: "1px solid rgba(255,215,0,0.2)",
          padding: "16px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(8px)",
          height: "60vh",
          overflowY: "auto",
          marginBottom: "20px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: "12px",
              textAlign: msg.role === "user" ? "right" : "left",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: "14px",
                maxWidth: "85%",
                background:
                  msg.role === "user"
                    ? "linear-gradient(90deg, #FFD700, #B8860B)"
                    : "rgba(255,255,255,0.1)",
                color: msg.role === "user" ? "#000" : "#FFF",
                fontWeight: 600,
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ opacity: 0.5, marginTop: "10px" }}>Digitando...</div>
        )}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escreva sua dúvida..."
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid rgba(255,215,0,0.3)",
            background: "rgba(255,255,255,0.06)",
            color: "white",
            outline: "none",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "14px 20px",
            background: "linear-gradient(90deg, #FFD700, #B8860B)",
            border: "none",
            borderRadius: "12px",
            fontWeight: 800,
            color: "#000",
            boxShadow: "0 0 12px rgba(255,215,0,0.4)",
          }}
        >
          → 
        </button>
      </div>
    </div>
  );
}
