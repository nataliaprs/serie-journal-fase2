export default function Sobre() {
  return (
    <main
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(3px)",
          padding: "25px 35px",
          borderRadius: "12px",
          maxWidth: "420px",
          color: "white",
          lineHeight: "1.5",
          fontSize: "1rem",
        }}
      >
        <h1 style={{ marginBottom: "12px", fontSize: "1.6rem" }}>Sobre o Projeto</h1>

        <p>
          Este projeto demonstra um CRUD completo utilizando React,
          React Router e integração com API, permitindo gerenciar séries
          de forma simples, organizada e intuitiva.
        </p>
      </div>
    </main>
  );
}
