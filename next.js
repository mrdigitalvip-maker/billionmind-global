"use client";

import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="page-container">

      <div className="particles"></div>

      <header className="header">
        <div className="logo">BILLIONMIND</div>
        <div className="slogan">Acelerador de riqueza com IA • 2025</div>
      </header>

      <main className="main">

        <div className="glass">
          <Link href="/create" className="btn">Criar Produto Digital</Link>
          <Link href="/strategy" className="btn">Criar Estratégia de Lucro</Link>
          <Link href="/mentor" className="btn">Mentor IA (Chat)</Link>
          <Link href="/tasks" className="btn">Tarefas Diárias</Link>
          <Link href="/pricing" className="btn">Planos & Assinatura</Link>
          <Link href="/panel" className="btn">Painel Financeiro</Link>
        </div>

        <div className="grid">
          <div className="card">
            <div className="value">$0.00</div>
            <small>Ganhos Totais</small>
          </div>
          <div className="card">
            <div className="value">0</div>
            <small>Produtos Criados</small>
          </div>
          <div className="card">
            <div className="value">0%</div>
            <small>Tarefas Concluídas</small>
          </div>
          <div className="card">
            <div className="value">FREE</div>
            <small>Plano Atual</small>
          </div>
        </div>

      </main>

      <nav className="nav">
        <Link href="/" className="nav-item active">Home</Link>
        <Link href="/create" className="nav-item">Criar</Link>
        <Link href="/tasks" className="nav-item">Tarefas</Link>
        <Link href="/panel" className="nav-item">Painel</Link>
      </nav>

    </div>
  );
}
