"use client";

import { useState } from "react";

export default function PanelPage() {
  const [user] = useState({
    name: "Bruno Brandão",
    plan: "PRO",
    gains: "R$ 47.200",
    products: 12,
    tasks: "89%",
  });

  const upgrades = [
    {
      title: "BillionMind PREMIUM",
      desc: "Desbloqueie lucros ilimitados, IA 10x mais rápida e vídeos HD.",
      price: "R$ 19,90/mês",
      color: "#ffd700",
    },
    {
      title: "BillionMind ELITE",
      desc: "Acesso completo ao mentor, automações, scripts e IA estratégica.",
      price: "R$ 49,90/mês",
      color: "#ff8b00",
    },
  ];

  return (
    <div style={{ padding: "22px" }}>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "800",
          marginBottom: "18px",
          color: "#ffd700",
        }}
      >
        Meu Painel
      </h1>

      {/* USER CARD */}
      <div
        style={{
          padding: "24px",
          borderRadius: "20px",
          background: "rgba(255,215,0,0.06)",
          border: "1px solid rgba(255,215,0,0.3)",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "6px" }}>{user.name}</h2>

        <div style={{ opacity: 0.7, marginBottom: "14px" }}>
          Plano atual: <b style={{ color: "#00ff9d" }}>{user.plan}</b>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >
          <div
            style={{
              padding: "14px",
              background: "#111",
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid rgba(255,215,0,0.2)",
            }}
          >
            <div style={{ fontSize: "22px", color: "#00d0ff" }}>
              {user.gains}
            </div>
            <small>Ganhos totais</small>
          </div>

          <div
            style={{
              padding: "14px",
              background: "#111",
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid rgba(0,255,157,0.2)",
            }}
          >
            <div style={{ fontSize: "22px", color: "#00ff9d" }}>
              {user.products}
            </div>
            <small>Produtos criados</small>
          </div>

          <div
            style={{
              padding: "14px",
              background: "#111",
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid rgba(0,208,255,0.3)",
            }}
          >
            <div style={{ fontSize: "22px", color: "#00d0ff" }}>
              {user.tasks}
            </div>
            <small>Tarefas concluídas</small>
          </div>

          <div
            style={{
              padding: "14px",
              background: "#111",
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid rgba(255,215,0,0.2)",
            }}
          >
            <div style={{ fontSize: "22px", color: "#ffd700" }}>{user.plan}</div>
            <small>Seu plano</small>
          </div>
        </div>
      </div>

      {/* RECCOMENDATIONS */}
      <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>
        Recomendações para Ganhar Mais
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {upgrades.map((u, i) => (
          <div
            key={i}
            style={{
              padding: "20px",
              borderRadius: "18px",
              background: "rgba(10,10,10,0.8)",
              border: `1px solid ${u.color}`,
              boxShadow: `0 0 16px ${u.color}40`,
            }}
          >
            <h4
              style={{
                marginBottom: "6px",
                color: u.color,
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              {u.title}
            </h4>

            <p style={{ opacity: 0.8, marginBottom: "8px" }}>{u.desc}</p>

            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                background: u.color,
                color: "#000",
                fontWeight: "800",
                fontSize: "14px",
              }}
              onClick={() =>
                alert(
                  `Abrindo área de upgrade do plano: ${u.title} (${u.price})`
                )
              }
            >
              Fazer upgrade • {u.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
