import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const strategy = {
      id: crypto.randomUUID(),
      niche: body.niche || "não informado",
      platform: body.platform || "não informado",
      goal: body.goal || "não informado",
      created_at: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Estratégia criada com sucesso!",
        data: strategy,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao criar estratégia",
      },
      { status: 500 }
    );
  }
}
