import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "O prompt é obrigatório." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROK_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GROK_API_KEY não encontrada no ambiente." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-2-latest",
        messages: [
          {
            role: "user",
            content: `Crie um produto digital completo baseado nisso: ${prompt}`,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!data.choices?.length) {
      return NextResponse.json(
        { error: "Resposta inválida da IA." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result: data.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao gerar produto digital." },
      { status: 500 }
    );
  }
}
