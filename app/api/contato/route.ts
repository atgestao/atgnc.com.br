import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactFormEmail } from '@/emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { nome, email, telefone, tipoEmpresa, assunto, mensagem } = body;

  try {
    const html = await render(
      ContactFormEmail({ nome, email, telefone, tipoEmpresa, assunto, mensagem })
    );

    await resend.emails.send({
      from: 'AT Gestão <noreply@atgnc.com.br>',
      to: 'mkt.atgestao@gmail.com',
      replyTo: email,
      subject: `[atgnc.com.br] ${assunto} - ${nome}`,
      html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
