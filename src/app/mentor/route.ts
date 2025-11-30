import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Envie uma mensagem válida.",
        },
        { status: 400 }
      );
    }

    // IA SIMULADA — depois conectamos na IA real
    const simulatedResponse = `
      Aqui é o *BillionMind Mentor*.
      Sua pergunta foi: "${message}"
      
      Resposta simulada:  
      O caminho mais rápido para escalar sua renda é focar em um produto digital simples,
      validado rapidamente e com tráfego consistente.  
      Vamos criar um plano para isso?
    `;

    return NextResponse.json(
      {
        success: true,
        reply: simulatedResponse.trim(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao processar mensagem.",
      },
      { status: 500 }
    );
  }
}
