import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Dados simulados (depois conectaremos ao Supabase)
    const panelData = {
      user: {
        name: "Bruno Brandão",
        plan: "PRO",
        xp: 1840,
      },
      stats: {
        totalEarnings: 47210, // $47.2K
        productsCreated: 12,
        tasksCompleted: 89,
      },
      progress: {
        todayTasks: 3,
        streak: 7, // dias seguidos
      },
    };

    return NextResponse.json(
      { success: true, data: panelData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao carregar dados do painel.",
      },
      { status: 500 }
    );
  }
}
