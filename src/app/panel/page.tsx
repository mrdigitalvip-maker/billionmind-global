"use client";

export default function PanelPage() {
  return (
    <div style={{ padding: "22px", fontFamily: "Inter", color: "white" }}>

      <h1
        style={{
          fontSize: "32px",
          marginBottom: "10px",
          color: "gold",
          fontWeight: 800,
        }}
      >
        Meu Painel
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "25px" }}>
        Acompanhe seus ganhos, produtos, progresso e evolução na plataforma.
      </p>

      {/* GRID PRINCIPAL */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "rgba(255,215,0,0.12)",
            border: "1px solid gold",
            padding: "18px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "26px", color: "gold" }}>R$ 12.487</div>
          <small style={{ opacity: 0.8 }}>Ganhos Totais</small>
        </div>

        <div
          style={{
            background: "rgba(0,208,255,0.15)",
            border: "1px solid #00d0ff",
            padding: "18px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "26px", color: "#00d0ff" }}>7</div>
          <small style={{ opacity: 0.8 }}>Produtos Criados</small>
        </div>

        <div
          style={{
            background: "rgba(0,255,157,0.12)",
            border: "1px solid #00ff9d",
            padding: "18px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "26px", color: "#00ff9d" }}>89%</div>
          <small style={{ opacity: 0.8 }}>Progresso Diário</small>
        </div>

        <div
          style={{
            background: "rgba(255,215,0,0.12)",
            border: "1px solid gold",
            padding: "18px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "26px", color: "gold" }}>PRO</div>
          <small style={{ opacity: 0.8 }}>Plano Atual</small>
        </div>
      </div>

      {/* LISTA DE PRODUTOS */}
      <h2 style={{ fontSize: "22px", marginBottom: "14px", color: "gold" }}>
        Seus Produtos
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginBottom: "30px",
        }}
      >
        {[
          "Guia Rápido de Renda com IA",
          "Script Viral de TikTok",
          "Mini Ebook: R$0 → R$10K",
        ].map((p, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,215,0,0.1)",
              border: "1px solid gold",
              padding: "14px",
              borderRadius: "14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{p}</span>
            <button
              style={{
                background: "gold",
                border: "none",
                padding: "6px 12px",
                borderRadius: "10px",
                color: "black",
                fontWeight: 700,
              }}
            >
              Abrir
            </button>
          </div>
        ))}
      </div>

      {/* EVOLUÇÃO */}
      <h2 style={{ fontSize: "22px", marginBottom: "14px", color: "#00ff9d" }}>
        Evolução Semanal
      </h2>

      <div
        style={{
          height: "120px",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg, rgba(0,255,157,0.15), rgba(0,255,157,0.05))",
          border: "1px solid #00ff9d",
          marginBottom: "20px",
        }}
      ></div>

      <button
        style={{
          width: "100%",
          background: "gold",
          padding: "16px",
          borderRadius: "14px",
          color: "black",
          fontWeight: 900,
          fontSize: "16px",
          marginTop: "10px",
          boxShadow: "0 0 18px gold",
          border: "none",
        }}
      >
        Ver Métricas Avançadas
      </button>
    </div>
  );
}
