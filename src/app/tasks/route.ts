import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Simulação de tarefas diárias
    const tasks = [
      {
        id: 1,
        title: "Criar um post viral usando IA",
        description:
          "Use qualquer gerador de conteúdo para criar um post simples e publicar no Instagram ou TikTok.",
        reward: "+15 XP",
      },
      {
        id: 2,
        title: "Pesquisar 1 produto digital lucrativo",
        description:
          "Entre no TikTok e procure vídeos com mais de 500k views na área de dinheiro e hábitos.",
        reward: "+20 XP",
      },
      {
        id: 3,
        title: "Criar um mini-roteiro de 30 segundos",
        description:
          "Escreva um texto curto com gatilho mental e CTA direto para seu produto.",
        reward: "+10 XP",
      },
      {
        id: 4,
        title: "Estudar 5 minutos sobre tráfego orgânico",
        description:
          "Pesquise no YouTube: 'como crescer rápido no TikTok 2025' e anote 3 ideias.",
        reward: "+5 XP",
      },
    ];

    return NextResponse.json(
      { success: true, tasks },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao gerar tarefas.",
      },
      { status: 500 }
    );
  }
}
