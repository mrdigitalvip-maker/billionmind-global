export default function CreateProduct() {
  return (
    <div style={{ padding: "30px", color: "white", fontFamily: "Inter" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Criar Produto Digital</h1>
      <p style={{ opacity: 0.8 }}>
        Aqui você criará ebooks, vídeos, cursos e produtos IA automaticamente.
      </p>

      <div style={{
        marginTop: "30px",
        background: "rgba(255,215,0,0.15)",
        border: "1px solid gold",
        padding: "20px",
        borderRadius: "16px"
      }}>
        <h3 style={{ color: "gold" }}>Digite seu prompt</h3>
        <textarea
          placeholder="Descreva o produto digital que deseja criar..."
          style={{
            width: "100%",
            height: "140px",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "10px",
            background: "black",
            color: "white",
            border: "1px solid gold"
          }}
        ></textarea>

        <button style={{
          marginTop: "20px",
          width: "100%",
          padding: "16px",
          fontSize: "16px",
          fontWeight: "bold",
          background: "gold",
          color: "black",
          borderRadius: "50px",
          cursor: "pointer",
          border: "none"
        }}>
          GERAR PRODUTO
        </button>
      </div>
    </div>
  );
}
