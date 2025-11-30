export default function Home() {
  return (
    <div style={{
      background: '#000',
      minHeight: '100vh',
      color: '#FFD700',
      padding: '40px',
      fontFamily: 'Inter, sans-serif'
    }}>

      <h1 style={{
        fontSize: '38px',
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: '10px',
        letterSpacing: '2px'
      }}>
        BILLIONMIND
      </h1>

      <p style={{
        textAlign: 'center',
        opacity: 0.8,
        marginBottom: '40px'
      }}>
        Acelerador de riqueza com IA • 2025
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        
        <a href="/mentor" style={buttonStyle}>Mentor IA (Chat)</a>
        <a href="/tasks" style={buttonStyle}>Tarefas Diárias de Renda</a>
        <a href="/panel" style={buttonStyle}>Painel Financeiro</a>
        <a href="/strategy" style={buttonStyle}>Planos & Assinatura</a>

      </div>

    </div>
  );
}

const buttonStyle = {
  padding: '18px',
  borderRadius: '12px',
  border: '2px solid #FFD700',
  color: '#FFD700',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  background: 'rgba(255, 215, 0, 0.05)'
};
