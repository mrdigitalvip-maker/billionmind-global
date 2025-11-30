import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Você precisa enviar um prompt." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const aiResponse = await fetch(
      "https://api.x.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.GROK_API_KEY,
        },
        body: JSON.stringify({
          model: "grok-beta",
          messages: [
            {
              role: "user",
              content: `Crie uma estratégia de ganho poderosa, direta e lucrativa com base em: ${prompt}`,
            },
          ],
        }),
      }
    );

    const json = await aiResponse.json();
    const result =
      json?.choices?.[0]?.message?.content ||
      "Não foi possível gerar a estratégia.";

    await supabase.from("strategies").insert([
      {
        title: prompt,
        result,
      },
    ]);

    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro interno ao criar estratégia." },
      { status: 500 }
    );
  }
}
