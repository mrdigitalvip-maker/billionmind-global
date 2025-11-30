import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "O prompt é obrigatório." },
        { status: 400 }
      );
    }

    // conectar banco
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // gerar produto com IA (Gemini)
    const aiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { parts: [{ text: `Crie um produto digital completo: ${prompt}` }] },
          ],
        }),
      }
    );

    const data = await aiResponse.json();
    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Não foi possível gerar o produto.";

    // salvar no banco Supabase
    await supabase.from("products").insert([
      {
        title: prompt,
        description: "Produto gerado automaticamente",
        result,
      },
    ]);

    return NextResponse.json({ result });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro interno ao gerar produto" },
      { status: 500 }
    );
  }
}
