"use client";

import { useState, useEffect, useRef } from "react";

export default function Mentor() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  // Carregar histórico salvo
  useEffect(() => {
    const saved = localStorage.getItem("bm_chat_history");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Salvar histórico
  function saveHistory(updated: any[]) {
    localStorage.setItem("bm_chat_history", JSON.stringify(updated));
  }

  // Enviar mensagem
  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveHistory(updatedMessages);

    setInput("");

    // 🔥 Mensagem de carregamento
    const loadingMessage = {
      role: "assistant",
      content: "Digitando...",
      loading: true,
    };
    setMessages((m) => [...m, loadingMessage]);

    // Escolher modelo (OpenAI por padrão)
    const response = await callAI(updatedMessages);

    // Remover "digitando"
    const withoutLoading = updatedMessages;
    setMessages([...withoutLoading, { role: "assistant", content: response }]);
    saveHistory([...withoutLoading, { role: "assistant", content: response }]);
  }

  // 🔥 Função central para chamar OpenAI / Gemini / Grok
  async function callAI(history: any[]) {
    try {
      const systemPrompt =
        "Você é o mentor oficial do BillionMind AI. Suas respostas são diretas, estratégicas e orientadas a lucro.";

      const formattedHistory = history.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      // Modelo OpenAI
      const res = await fetch("/api/mentor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...formattedHistory,
          ],
        }),
      });

      const data = await res.json();
      return data.reply || "Erro ao gerar resposta.";
    } catch (err) {
      return "Erro ao conectar à IA.";
    }
  }

  return (
    <div
      style={{
        padding: "20px",
        paddingTop: "110px",
        minHeight: "100vh",
        background: "radial-gradient(circle at 50% 50%, #001a22, #000)",
        color: "#fff",
      }}
    >
      {/* Cabeçalho */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "20px",
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,255,157,0.3)",
          zIndex: 999,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Orbitron",
            fontSize: "26px",
            background: "linear-gradient(90deg, #00ff9d, #00d0ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BillionMind Mentor
        </h1>
        <p style={{ fontSize: "12px", opacity: 0.7 }}>
          Sua IA especializada em dinheiro, disciplina e estratégia.
        </p>
      </div>

      {/* MENSAGENS */}
      <div style={{ marginBottom: "100px" }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: "16px",
              display: "flex",
              justifyContent: m.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                maxWidth: "75%",
                padding: "12px 16px",
                borderRadius: "16px",
                background:
                  m.role === "user"
                    ? "rgba(0,255,157,0.15)"
                    : "rgba(0,208,255,0.15)",
                border:
                  m.role === "user"
                    ? "1px solid rgba(0,255,157,0.4)"
                    : "1px solid rgba(0,208,255,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              {m.content}
            </div>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* INPUT */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "16px",
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(0,255,157,0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#111",
            borderRadius: "50px",
            padding: "10px",
            border: "1px solid rgba(0,255,157,0.3)",
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Fale comigo…"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              paddingLeft: "10px",
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              background: "var(--neon-green)",
              borderRadius: "50%",
              width: "46px",
              height: "46px",
              border: "none",
              color: "#000",
              fontWeight: "900",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
