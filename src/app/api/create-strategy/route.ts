import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { idea } = await req.json();

    if (!idea) {
      return NextResponse.json(
        { error: "Nenhuma ideia enviada." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "grok-beta",
        messages: [
          {
            role: "user",
            content:
              "Crie uma estratégia de ganho clara, direta, prática e rápida para ganhar dinheiro baseada na seguinte ideia: " +
              idea,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return NextResponse.json(
        { error: "Erro na resposta da IA." },
        { status: 500 }
      );
    }

    const result = data.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { error: "Falha ao gerar estratégia de ganho." },
      { status: 500 }
    );
  }
}
