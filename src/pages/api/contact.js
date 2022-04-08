require('dotenv').config()

export default async function (req, res) {
  if (req.method === 'POST') {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      from: process.env.SENDER_EMAIL,
      to: 'luanferreira2136@gmail.com',
      subject: `Nova Mensagem | Website R&D Advogados`,
      text: `Mensagem: ${req.body.message} | Enviado de ${req.body.email}`,
      html: `
                <div>Você recebeu uma nova mensagem no seu site. Confira as informações abaixo:</div>
                <p><strong>Nome</strong>: ${req.body.name}</p>
                <p><strong>E-mail</strong>: ${req.body.email}</p>
                <p><strong>Área de Atuação</strong>: ${req.body.area}</p>
                <p><strong>Mensagem</strong>: ${req.body.message}</p>
              `
    }

    await sgMail.send(message);
    return res.status(200).end();
  }

  return res.status(404).end();
}