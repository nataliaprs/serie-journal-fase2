export default function Home() {
  return (
    <main>
      <div
        style={{
          background: "rgba(0,0,0,0.55)",
          padding: "25px",
          borderRadius: "12px",
          maxWidth: "450px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "20px", // ↓ espaço entre título e texto
          }}
        >
          Página Inicial
        </h1>

        <p
          style={{
            color: "#eaeaea",
            fontSize: "1.1rem",
            lineHeight: "1.6", // ↓ mais espaçamento entre linhas
            marginBottom: "6px", // ↓ espaço entre as duas frases
          }}
        >
          Bem-vindo ao Seriando!
        </p>

        <p
          style={{
            color: "#eaeaea",
            fontSize: "1.05rem",
            lineHeight: "1.5",
          }}
        >
          Gerencie séries assistidas de uma forma fácil e intuitiva.
        </p>
      </div>
    </main>
  );
}




