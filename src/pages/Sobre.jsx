import React from "react";
export default function Sobre() {
  return (
    <main>
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "600px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "15px" }}>
          Sobre o Projeto
        </h1>

        <p
          style={{
            color: "#eaeaea",
            fontSize: "1.1rem",
            lineHeight: "1.6",
          }}
        >
          Este é um projeto de gerenciamento de séries assistidas desenvolvido com React para a 
          disciplina Desenvolvimento de Sistemas Frontend. Aqui você pode cadastrar, visualizar,  
          editar e excluir séries assistidas.
          </p>
      </div>
    </main>
  );
}