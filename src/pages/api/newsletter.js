export default async (req, res) => {
  if (req.method === 'POST') {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      from: process.env.SENDER_EMAIL,
      to: 'luanferreira2136@gmail.com',
      subject: 'Nova Inscrição | Website R&D Advogados',
      text: 'Esta foi enviada do seu website.',
      html: `
                <div>Nova inscrição recebida para a Newsletter:</div>
                <p><strong>E-mail</strong>: ${req.body.email}</p>
              `
    }

    await sgMail.send(message);
    return res.status(200).end();
  }

  return res.status(404).end();
}