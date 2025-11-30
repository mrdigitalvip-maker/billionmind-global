import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || message.trim() === "") {
      return NextResponse.json(
        { success: false, reply: "Envie uma mensagem válida." },
        { status: 400 }
      );
    }

    // ==== Escolha do provedor ====
    const provider = process.env.AI_PROVIDER || "grok";

    let reply = "Não foi possível gerar a resposta.";

    // =========================================================
    // 1️⃣ PROVEDOR: GROK (xAI) — Ultra Rápido
    // =========================================================
    if (provider === "grok") {
      const key = process.env.GROK_KEY;

      if (!key) throw new Error("GROK_KEY não configurada.");

      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "grok-beta",
          messages: [
            {
              role: "system",
              content:
                "Você é o Mentor Oficial do BillionMind AI, motivacional e focado em inteligência financeira.",
            },
            { role: "user", content: message },
          ],
        }),
      });

      const data = await response.json();
      reply = data?.choices?.[0]?.message?.content || reply;
    }

    // =========================================================
    // 2️⃣ PROVEDOR: GOOGLE GEMINI
    // =========================================================
    if (provider === "gemini") {
      const key = process.env.GEMINI_KEY;
      if (!key) throw new Error("GEMINI_KEY não configurada.");

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${key}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:
                      "Você é o Mentor BillionMind AI, especialista em dinheiro, mindset e negócios. Responda:\n\n" +
                      message,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Erro ao gerar resposta com Gemini.";
    }

    // =========================================================
    // 3️⃣ PROVEDOR: OPENAI GPT
    // =========================================================
    if (provider === "openai") {
      const key = process.env.OPENAI_KEY;
      if (!key) throw new Error("OPENAI_KEY não configurada.");

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "Você é o Mentor BillionMind AI, direto, motivacional e especializado em riqueza.",
            },
            { role: "user", content: message },
          ],
        }),
      });

      const data = await response.json();
      reply =
        data?.choices?.[0]?.message?.content ||
        "Erro ao gerar resposta com OpenAI.";
    }

    return NextResponse.json({ success: true, reply }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        reply:
          "Erro ao conectar com a IA. Verifique suas APIs e tente novamente.",
      },
      { status: 500 }
    );
  }
}
