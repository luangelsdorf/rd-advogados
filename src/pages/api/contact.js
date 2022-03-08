require('dotenv').config()

export default function (req, res) {
  if (req.method === 'POST') {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.email,
      to: 'luanferreira2136@gmail.com',
      subject: `Nova Mensagem | Formulário Site BRC`,
      text: `Mensagem: ${req.body.message} | Enviado de ${req.body.email}`,
      html: `
                <div>Você recebeu uma nova mensagem no seu site. Confira as informações abaixo:</div>
                <p><strong>Nome</strong>: ${req.body.name}</p>
                <p><strong>E-mail</strong>: ${req.body.email}</p>
                <p><strong>Área de Atuação</strong>: ${req.body.area}</p>
                <p><strong>Mensagem</strong>: ${req.body.message}</p>
              `
    }

    transporter.sendMail(mailData, (err, info) => {
      if (err)
        console.log(err)
      else
        console.log(info);
    })
    res.send('success');


  } else {
    res.status(405).send('405 - Method Not Allowed.')
  }
}