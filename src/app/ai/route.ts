import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, provider } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "O prompt é obrigatório." },
        { status: 400 }
      );
    }

    // 🔥 Seleção automática da IA
    let apiKey = "";
    let url = "";
    let body: any = {};

    switch (provider) {
      case "openai":
        apiKey = process.env.OPENAI_API_KEY!;
        url = "https://api.openai.com/v1/chat/completions";
        body = {
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
        };
        break;

      case "grok":
        apiKey = process.env.GROK_API_KEY!;
        url = "https://api.x.ai/v1/chat/completions";
        body = {
          model: "grok-2-latest",
          messages: [{ role: "user", content: prompt }],
        };
        break;

      case "gemini":
        apiKey = process.env.GEMINI_API_KEY!;
        url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`;
        body = {
          contents: [{ parts: [{ text: prompt }] }],
        };
        break;

      default:
        return NextResponse.json(
          { error: "Provider inválido." },
          { status: 400 }
        );
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: "Chave de API não encontrada no ambiente." },
        { status: 500 }
      );
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(provider !== "gemini" && { Authorization: `Bearer ${apiKey}` }),
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    // 🔥 Normalização da resposta
    let text = "";

    if (provider === "gemini") {
      text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta.";
    } else {
      text = data.choices?.[0]?.message?.content || "Sem resposta.";
    }

    return NextResponse.json({ result: text });
  } catch (e) {
    return NextResponse.json(
      { error: "Erro interno.", details: String(e) },
      { status: 500 }
    );
  }
}
