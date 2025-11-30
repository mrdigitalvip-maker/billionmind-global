import { NextResponse } from "next/server";

// ------------- OPENAI (ChatGPT) -------------
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// ------------- GROK (xAI) -------------
const GROK_API_KEY = process.env.GROK_API_KEY;

// ------------- GEMINI OPCIONAL -------------
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


export async function POST(req: Request) {
  try {
    const { idea } = await req.json();

    if (!idea) {
      return NextResponse.json({ error: "Nenhuma ideia enviada." }, { status: 400 });
    }

    // ==============================
    // PRIORIDADE 1 → OPENAI
    // ==============================
    if (OPENAI_API_KEY) {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "Você é um especialista em criação de produtos digitais lucrativos."
            },
            {
              role: "user",
              content: `Crie um produto digital lucrativo baseado nessa ideia: ${idea}`
            }
          ]
        })
      });

      const data = await response.json();

      return NextResponse.json({
        product: data?.choices?.[0]?.message?.content || "Sem resposta gerada."
      });
    }

    // ==============================
    // PRIORIDADE 2 → GROK
    // ==============================
    if (GROK_API_KEY) {
      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROK_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "grok-beta",
          messages: [
            {
              role: "system",
              content: "Você é um especialista em criar produtos digitais altamente lucrativos."
            },
            {
              role: "user",
              content: `Crie um produto digital poderoso baseado nesta ideia: ${idea}`
            }
          ]
        })
      });

      const data = await response.json();

      return NextResponse.json({
        product: data?.choices?.[0]?.message?.content || "Sem resposta gerada."
      });
    }

    // ==============================
    // SE NENHUMA IA ESTIVER CONFIGURADA
    // ==============================
    return NextResponse.json({
      product:
        "Nenhuma inteligência artificial configurada. Adicione OPENAI_API_KEY ou GROK_API_KEY nas variáveis de ambiente do projeto."
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: "Erro interno na API", details: error.message },
      { status: 500 }
    );
  }
}
