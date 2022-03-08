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

    console.log(process.env.email);
    console.log(process.env.password);

    const mailData = {
      from: process.env.email,
      to: 'luanferreira2136@gmail.com',
      subject: `Nova Inscrição | Newsletter Site BRC`,
      text: `Nova inscrição para ${req.body.email}`,
      html: `
                <div>Nova inscrição recebida:</div>
                <p><strong>E-mail</strong>: ${req.body.email}</p>
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
    res.status(405).send('405 - Method not Allowed.')
  }
}