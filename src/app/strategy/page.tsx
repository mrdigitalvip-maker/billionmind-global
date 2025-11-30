export default function StrategyPage() {
  return (
    <div style={{ padding: "30px", color: "white", fontFamily: "Inter" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Criar Estratégia de Ganho</h1>
      <p style={{ opacity: 0.8 }}>
        Gere estratégias inteligentes e personalizadas para lucrar rápido usando IA.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "rgba(255,215,0,0.15)",
          border: "1px solid gold",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
        <h3 style={{ color: "gold" }}>Explique a situação</h3>

        <textarea
          placeholder="Ex: Tenho pouco tempo, quero ganhar dinheiro rápido, o que posso fazer?"
          style={{
            width: "100%",
            height: "140px",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "10px",
            background: "black",
            color: "white",
            border: "1px solid gold",
          }}
        ></textarea>

        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "16px",
            fontSize: "16px",
            fontWeight: "bold",
            background: "gold",
            color: "black",
            borderRadius: "50px",
            cursor: "pointer",
            border: "none",
          }}
        >
          GERAR ESTRATÉGIA
        </button>
      </div>

      <div
        style={{
          marginTop: "35px",
          padding: "20px",
          borderRadius: "16px",
          background: "rgba(255,215,0,0.1)",
          border: "1px solid rgba(255,215,0,0.3)",
        }}
      >
        <h3 style={{ color: "gold" }}>Estratégia Recomendada</h3>
        <p style={{ opacity: 0.8, marginTop: "8px" }}>
          O resultado da IA aparecerá aqui.  
          Você poderá copiar, salvar e aplicar imediatamente.
        </p>
      </div>
    </div>
  );
}
