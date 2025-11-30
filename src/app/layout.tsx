import "./globals.css";

export const metadata = {
  title: "BillionMind • Global AI Money",
  description: "Acelerador de riqueza com IA • 2025",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fontes */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        {/* Estilos Globais */}
        <style>{`
          body {
            margin: 0;
            background: radial-gradient(circle at 50% 50%, #110700, #000);
            color: #FFD700;
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
          }

          ::-webkit-scrollbar {
            width: 3px;
          }
          ::-webkit-scrollbar-thumb {
            background: #FFD700;
          }
        `}</style>
      </head>

      <body>
        {/* Aqui entram TODAS as páginas do app */}
        {children}
      </body>
    </html>
  );
}
