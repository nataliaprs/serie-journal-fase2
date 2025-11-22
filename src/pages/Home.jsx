export default function Home() {
  return (
    <main style={{
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <div style={{
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(4px)",
        padding: "40px",
        borderRadius: "12px",
        maxWidth: "500px",
        color: "white"
      }}>
        <h1 style={{ marginBottom: "10px" }}>Página Inicial</h1>
        <p style={{ fontSize: "1.1rem" }}>
          Bem-vindo ao projeto CRUD de séries!<br/>
          Gerencie séries assistidas de uma forma fácil e intuitiva.
        </p>
      </div>
    </main>
  );
}

