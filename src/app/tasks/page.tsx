"use client";

import { useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Criar um produto digital simples em 15 minutos", done: false },
    { id: 2, text: "Gerar uma estratégia de venda com IA", done: false },
    { id: 3, text: "Criar um post viral usando inteligência artificial", done: false },
    { id: 4, text: "Enviar seu link de venda para 5 pessoas", done: false }
  ]);

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <div style={{ padding: "20px", color: "white", fontFamily: "Inter" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "12px", color: "gold" }}>
        Tarefas Diárias
      </h1>
      
      <p style={{ opacity: 0.7, marginBottom: "20px" }}>
        Complete as missões abaixo para aumentar sua renda e liberar bônus.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >
        {tasks.map(task => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              background: "rgba(255,215,0,0.12)",
              border: "1px solid gold",
              padding: "18px",
              borderRadius: "16px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "0.3s",
              opacity: task.done ? 0.5 : 1
            }}
          >
            <span style={{ fontSize: "15px" }}>{task.text}</span>
            <span
              style={{
                color: task.done ? "black" : "gold",
                background: task.done ? "gold" : "transparent",
                padding: "6px 10px",
                borderRadius: "12px",
                border: task.done ? "none" : "1px solid gold",
                fontSize: "12px",
                fontWeight: "bold"
              }}
            >
              {task.done ? "Feito" : "Fazer"}
            </span>
          </div>
        ))}
      </div>

      {/* BÔNUS */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "16px",
          background: "rgba(0,255,157,0.15)",
          border: "1px solid #00ff9d"
        }}
      >
        <h3 style={{ color: "#00ff9d", marginBottom: "10px" }}>
          Bônus Diário
        </h3>
        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Complete todas as tarefas para receber uma estratégia secreta
          personalizada para multiplicar sua renda.
        </p>
      </div>
    </div>
  );
}
