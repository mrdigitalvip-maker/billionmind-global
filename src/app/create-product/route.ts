import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Simulação de criação de produto — você depois integra com Supabase
    const product = {
      id: crypto.randomUUID(),
      title: body.title || "Novo Produto",
      description: body.description || "",
      created_at: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Produto criado com sucesso!",
        data: product,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao criar produto",
      },
      { status: 500 }
    );
  }
}
