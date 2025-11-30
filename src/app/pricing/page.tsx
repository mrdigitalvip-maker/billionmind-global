"use client";

export default function PricingPage() {
  const plans = [
    {
      name: "FREE",
      price: "R$ 0",
      highlight: false,
      benefits: [
        "Acesso limitado ao Mentor AI",
        "Criar 1 produto digital por dia",
        "Tarefas básicas de renda",
        "Templates básicos",
      ],
      color: "#00d0ff",
    },
    {
      name: "PRO",
      price: "R$ 19,90/mês",
      highlight: true,
      benefits: [
        "Criar produtos ilimitados",
        "IA 3x mais rápida",
        "Scripts de alta conversão",
        "Painel de métricas PRO",
        "Exportar PDFs profissionais",
        "Efeitos de voz e vídeos IA",
      ],
      color: "#ffd700",
    },
    {
      name: "PREMIUM",
      price: "R$ 49,90/mês",
      highlight: false,
      benefits: [
        "Tudo do PRO +",
        "IA Estratégica BillionMind",
        "Blueprint de Renda Mensal",
        "Roteiros automáticos de venda",
        "Modelos de Funil de Venda",
        "Suporte prioritário",
      ],
      color: "#ff8b00",
    },
  ];

  return (
    <div style={{ padding: "26px" }}>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "900",
          marginBottom: "18px",
          color: "#ffd700",
        }}
      >
        Assinatura
      </h1>

      <p
        style={{
          opacity: 0.7,
          marginBottom: "28px",
          lineHeight: "24px",
          fontSize: "14px",
        }}
      >
        Escolha o plano que vai mudar seu jogo. A IA faz o trabalho — você lucra.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {plans.map((p, i) => (
          <div
            key={i}
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(10,10,10,0.7)",
              border: `1px solid ${p.color}`,
              boxShadow: p.highlight
                ? `0 0 20px ${p.color}70`
                : `0 0 12px ${p.color}30`,
            }}
          >
            <h3
              style={{
                color: p.color,
                fontSize: "22px",
                fontWeight: "800",
                marginBottom: "6px",
              }}
            >
              {p.name}
            </h3>

            <div
              style={{
                color: "#fff",
                fontSize: "26px",
                fontWeight: "900",
                marginBottom: "16px",
              }}
            >
              {p.price}
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: "22px",
                lineHeight: "22px",
                fontSize: "14px",
              }}
            >
              {p.benefits.map((b, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: p.color }}>✔</span> {b}
                </li>
              ))}
            </ul>

            <button
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                background: p.color,
                border: "none",
                color: "#000",
                fontWeight: "900",
                fontSize: "16px",
              }}
              onClick={() =>
                alert(
                  `Processando assinatura do plano: ${p.name} — conectar Stripe/GrokPay aqui`
                )
              }
            >
              Assinar agora
            </button>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: "28px",
          opacity: 0.5,
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        Pagamento 100% seguro. Cancelamento a qualquer momento.
      </p>
    </div>
  );
}
