"use client";
import { useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Criar um mini produto digital de R$9,90", done: false },
    { id: 2, title: "Postar 1 conteúdo viral no TikTok", done: false },
    { id: 3, title: "Enviar CTA irresistível para 10 pessoas", done: false },
    { id: 4, title: "Gerar um roteiro usando o AI Mentor", done: false },
    { id: 5, title: "Ler 5 min do Blueprint Mental", done: false },
  ]);

  function toggleTask(id: number) {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          color: "#ffd700",
          fontWeight: "900",
          fontSize: "26px",
          marginBottom: "18px",
        }}
      >
        Tarefas Diárias
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "20px" }}>
        Complete as ações abaixo para acelerar seus ganhos.  
        Cada tarefa concluída libera **XP** e aumenta sua performance no painel.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              padding: "16px",
              borderRadius: "14px",
              cursor: "pointer",
              border: "1px solid #333",
              background: task.done ? "#1a1a1a" : "#111",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "0.2s",
            }}
          >
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                color: task.done ? "#888" : "#fff",
                fontSize: "15px",
              }}
            >
              {task.title}
            </span>

            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                border: "2px solid #ffd700",
                background: task.done ? "#ffd700" : "transparent",
                transition: "0.2s",
              }}
            ></span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "22px",
          borderRadius: "14px",
          background: "rgba(255,215,0,0.08)",
          border: "1px solid rgba(255,215,0,0.3)",
        }}
      >
        <h2 style={{ color: "#ffd700", marginBottom: "10px" }}>Dica do Dia</h2>
        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          A pessoa que executa **pequenas ações todos os dias** vence 99% da
          população que tenta fazer tudo de uma vez.
        </p>
      </div>
    </div>
  );
}
