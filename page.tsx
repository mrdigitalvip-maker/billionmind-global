"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        background: "radial-gradient(circle at 50% 50%, #110700, #000)",
        minHeight: "100vh",
        color: "#FFD700",
        fontFamily: "Inter, sans-serif",
        paddingBottom: "90px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px 10px",
        }}
      >
        <h1
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "38px",
            fontWeight: "900",
            color: "#FFD700",
            textShadow: "0 0 20px #ffdf70",
          }}
        >
          BILLIONMIND
        </h1>

        <p
          style={{
            marginTop: "10px",
            opacity: 0.8,
            fontSize: "14px",
          }}
        >
          Acelerador de riqueza com IA • 2025
        </p>
      </div>

      {/* MENU PRINCIPAL */}
      <div style={{ padding: "20px" }}>
        <button
          onClick={() => router.push("/mentor")}
          style={btn}
        >
          Mentor IA (Chat)
        </button>

        <button
          onClick={() => router.push("/tasks")}
          style={btn}
        >
          Tarefas Diárias de Renda
        </button>

        <button
          onClick={() => router.push("/panel")}
          style={btn}
        >
          Painel Financeiro
        </button>

        <button
          onClick={() => router.push("/pricing")}
          style={btn}
        >
          Planos & Assinatura
        </button>
      </div>

      {/* MÉTRICAS (Painel visual estático por enquanto) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          padding: "20px",
        }}
      >
        <div style={card}>
          <h2 style={value}>$47.2K</h2>
          <p style={label}>Ganhos Totais</p>
        </div>

        <div style={card}>
          <h2 style={value}>12</h2>
          <p style={label}>Produtos Criados</p>
        </div>

        <div style={card}>
          <h2 style={value}>89%</h2>
          <p style={label}>Tarefas Concluídas</p>
        </div>

        <div style={card}>
          <h2 style={value}>PRO</h2>
          <p style={label}>Plano Atual</p>
        </div>
      </div>

      {/* NAV BAR */}
      <div style={navbar}>
        <div style={navItemActive}>Home</div>

        <div
          style={navItem}
          onClick={() => router.push("/create-product")}
        >
          Criar
        </div>

        <div
          style={navItem}
          onClick={() => router.push("/tasks")}
        >
          Tarefas
        </div>

        <div
          style={navItem}
          onClick={() => router.push("/panel")}
        >
          Painel
        </div>
      </div>
    </div>
  );
}

/* STYLE OBJECTS */

const btn: React.CSSProperties = {
  width: "100%",
  padding: "18px",
  margin: "12px 0",
  borderRadius: "14px",
  background: "transparent",
  color: "#FFD700",
  border: "2px solid #FFD700",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(255,215,0,0.5)",
};

const card: React.CSSProperties = {
  background: "rgba(255,215,0,0.08)",
  padding: "18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,215,0,0.25)",
  textAlign: "center",
};

const value: React.CSSProperties = {
  fontFamily: "Orbitron, sans-serif",
  color: "#FFD700",
  fontSize: "24px",
  marginBottom: "4px",
};

const label: React.CSSProperties = {
  fontSize: "12px",
  opacity: 0.8,
};

const navbar: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "rgba(0,0,0,0.85)",
  borderTop: "1px solid #FFD70044",
  display: "flex",
  justifyContent: "space-around",
  padding: "14px 0",
};

const navItem: React.CSSProperties = {
  color: "#888",
  fontSize: "13px",
};

const navItemActive: React.CSSProperties = {
  color: "#FFD700",
  fontSize: "13px",
  fontWeight: "700",
};
